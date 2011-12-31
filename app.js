var connect = require('connect')
    ,fs = require('fs')
    ,jade = require('jade')
    ,browserify = require('browserify')
    ,socketio = require('socket.io')
    ,irc = require('irc');

var bundle = browserify({
    require : [
        {jquery: 'jquery-browserify'},
        {backbone: 'backbone-browserify'}
    ]
    ,watch : true
});
bundle.use(require('require-jade'));
bundle.addEntry(__dirname + '/client/client.js');
var server = connect.createServer(
    connect.logger()
    , connect.static(__dirname + '/client')
);
server.use(connect.router(function(app) {
    app.get('/', function(req, res) {
        res.end(require('./client/templates/layout.jade')());
    });
}));
server.use(bundle);
io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    socket.on('logOn', function(data) {
        console.log(data);
        var client = new irc.Client(data.server, data.nickName);
        console.log(client);
        socket.on('command', function(commandData) {
            if (commandData.command.indexOf('/join') > -1) {
                channelName = commandData.command.replace('/join ', '');
                client.join(channelName, function(nick, message) {
                    client.on('message' + channelName, function(nick, text) {
                        console.log('new message ' + channelName);
                        socket.emit('message' + channelName, {nick:nick,text:text})
                    });
                    socket.emit('joined', channelName);
                });
            } else if (commandData.command.indexOf('/msg') > -1) {
                commandData = commandData.command.replace('/msg ', '').split(' ');
                client.say(commandData[0], commandData[1]);
            } else {
                client.say(commandData.source, commandData.command);
            }
        });
        socket.on('part', function(room) {
            console.log(room);
            client.part(room);
        });
        socket.on('disconnect', function () {
            client.disconnect();
        });
        client.addListener('motd', function(motd) {
            socket.emit('motd', motd)
            //client.list();
        });
        client.addListener('notice', function(nick, to, text) {
            socket.emit('notice', {nick:nick,to:to,text:text})
        });
        client.addListener('channellist', function(channelList) {
            socket.emit('channellist', channelList);
        });
        client.addListener('names', function(channel, nicks) {
            socket.emit('nicks' + channel.toLowerCase(), nicks);
        });
        client.addListener('error', function(raw) {
            console.log(raw);
        });
    });
});
server.listen(8000);
console.log('listening');
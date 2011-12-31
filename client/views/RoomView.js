var $ = require('jquery')
    ,Backbone = require('backbone')
module.exports = RoomView = Backbone.View.extend({
     template : require('../templates/ircpanel.jade')
    ,tagName : 'div'
    ,className : 'room-view'
    ,events : {
        'keyup .main-input' : 'onMainInputKeyUp'
    }
    ,initialize : function(name, nickName, socket) {
        var self = this;
        this.socket = socket;
        this.el.innerHTML = this.template({sideBarHeader: 'Users',mainHeader: name});
        this.el.id = name.replace('#', '');
        this.id = name;
        this.nickName = nickName;
        this.socket.on('nicks' + this.id, function(nicks) {
            var users = '';
            $.each(nicks, function(index, value) {
                users += '<div>' + index + '</div>'
            });
            self.users.html(users);
        });
        this.socket.on('message' + this.id, function(data) {
            self.messages.append('<div>' + data.nick + ' : ' + data.text + '</div>');
        });
    }
    ,render : function () {
        $('body').append(this.el);
        this.messages = this.$('.irc-main');
        this.users = this.$('.irc-list');
    }
    ,onMainInputKeyUp : function(event) {
        //if enter
        if (event.which === 13) {
            var command = this.$('.main-input').val();
            this.socket.emit('command', {source:this.id,command:command});
            this.$('.main-input').val('');
            if (command.indexOf('/') === -1) {
                this.messages.append('<div>' + this.nickName + ' : ' + command + '</div>');
            }
        }
    }
});
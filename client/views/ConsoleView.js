var $ = require('jquery')
    ,Backbone = require('backbone');
module.exports = Backbone.View.extend({
     template : require('../templates/ircpanel.jade')
    ,tagName : 'div'
    ,id : 'console'
    ,className : 'room-view'
    ,events : {
        'keyup .main-input' : 'onMainInputKeyUp'
    } 
    ,initialize : function(socket) {
        this.socket = socket;
        this.el.innerHTML = this.template({sideBarHeader: 'Channel List',mainHeader:'Console'});
        this.bind('notice', this.onNotice);
        this.bind('motd', this.onMotd);
        this.bind('channellist', this.onChannelList)
    }
    ,render : function() {
        var self = this;
        $('body').append(this.el);
        this.console = this.$('.irc-main');
        this.channelList = this.$('.irc-list');
        this.socket.on('notice', function(notice) {
            self.trigger('notice', notice)
        });
        this.socket.on('motd', function(motd) {
            self.trigger('motd', motd);
        });
        this.socket.on('channellist', function(list) {
            self.trigger('channellist', list);
        });
    }
    ,onNotice : function(notice) {
        this.console.append(notice.text + '<br/>');
        this.console.prop('scrollTop', $('#console').prop('scrollHeight'));
    }
    ,onMotd : function(motd) {
        this.console.append(motd.replace(new RegExp("\\n", "g"), '<br/>') + '</br>');
        this.console.prop('scrollTop', $('#console').prop('scrollHeight'));
    }
    ,onChannelList : function(list) {
        if (list) {
            var channelsHTML = "";
            list.forEach(function(value, index) {
                channelsHTML += '<div>' + value.name + '</div>';
            });
            this.channelList.append(channelsHTML);
        }
    }
    ,onMainInputKeyUp : function(event) {
        //if enter
        if (event.which === 13) {
            this.socket.emit('command', {source:'console',command: this.$('.main-input').val()});
            $('.main-input').val('');
        }
    }
});
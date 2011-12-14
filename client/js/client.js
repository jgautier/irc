var $ = require('jquery');
    window.jQuery = $;
var    Backbone = require('backbone')
     ,jadeify = require('./jadeify')
     ,LoginView = require('./views/LoginView')
     ,ConsoleView = require('./views/ConsoleView')
    ,io =  window.io
    ,RoomView = require('./views/RoomView');
$(document).ready(function(){
	var socket = io.connect('http://localhost:8000')
	var AppView = Backbone.View.extend({
		el : 'body'
	   ,login : new LoginView()
	   ,console : new ConsoleView(socket)
	   ,topbar : $(jadeify('topbar'))
       ,events : {
            'click .nav li a' : 'switchChannel'
        }
	   ,initialize : function (){
	   		$(window).resize(this.resizeContent);
            var self = this;
	   		this.login.bind('logOn',function(data){
                self.nickName = data.nickName;
	   			socket.emit('logOn',data);
	   		});
	   		socket.on('joined',function(channel){
                var room = new RoomView(channel,self.nickName,socket);
                self.addRoom(room);
	   		});
	   		socket.on('names',function(data){
	   			console.log(data.names);
	   		});
            $('.close').live('click',function(){
                var roomId = $(this).parent().data('room-id');
                socket.emit('part',roomId);
                $(roomId).remove();
                $(this).parent().parent().remove();
            });
	   }
	   ,render : function(){
	   	  this.login.render();
	   	  this.console.render();
	   	  $(this.el).append(this.topbar);
	   	  this.resizeContent();
	   }
	   ,resizeContent : function(){
	      $('.content,.sidebar').css('height',$(window).height()-(parseInt($('body').css('padding-top'))+106));
	   }
       ,addRoom : function(roomView){
            $('#console').hide();
            $('.room-view').hide();
            $('.active').removeClass('active');
            $('.nav li').live('click',function(){
               $('.active').removeClass('active');
               $(this).addClass('active');
            });
            $('.nav').append('<li class="active"><a href="#" data-room-id='+roomView.id+'>'+roomView.id+'&nbsp;&nbsp;<span class="close">x</span></a></li>');
            roomView.render();
            this.resizeContent();
       }
       ,switchChannel : function(event){
            $('.room-view').hide();
            $($(event.target).attr('data-room-id')).show();
            this.resizeContent();
        }
	});
	var app = new AppView();
	app.render();
});
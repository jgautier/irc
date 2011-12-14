var $ = require('jquery')
	 ,Backbone = require('backbone')
	 ,modal = require('../bootstrap/modal').modal
	 ,jadeify = require('../jadeify');
modal($);
module.exports = LoginView = Backbone.View.extend({
	el : 'body'
 ,login : $(jadeify('modals/login'))
 ,events : {
		'click #logOn' : 'logOn'
 }
 ,initialize : function(){
 		this.login.modal({
	  	show : true
	  	,backdrop : 'static'
	  });
 }
 ,logOn : function(){
	this.login.modal();
  	this.trigger('logOn',{
		nickName : $('#nickName').val()
 	   ,channels : $('#channels').val()
 	   ,server : $('#server').val()
	});
 }
 ,render : function(){
 		$(this.el).append(this.login);
 }
});
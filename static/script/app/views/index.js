define(function (require) {
    "use strict";
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        ZeroClipboard       = require('ZeroClipboard'),
        models              = require('app/models/message'),
        tpl                 = require('text!template/index.html');

    return Backbone.View.extend({
        el: $('.content'),
        initialize: function(){
        },
        render: function(){
            $.get("http://api.uup.nu/max/", function(data) {
                var msg = new models.Message(JSON.parse(data));
                $('.content').html(_.template(tpl,{message : msg}));
                $("#content").focus();
            });
        },
        events: {
            'click #save' : 'saveMessage'
        },
        saveMessage: function(){
            var message = new models.Message({content: $('#content').val()});
            message.save(null,{
                success: function(){
                    var code = message.get("code");
                    var clip = new ZeroClipboard.Client();
                    clip.addEventListener('mouseOver',function (client){
                        clip.setText("http://uup.nu/#"+code);
                    });
                    clip.glue('d_clip_button', 'd_clip_container' );
                    var Router = require('app/router');
                    var router = new Router();
                    router.navigate('/'+code, {trigger:true});
                }
            });
        }
    });
});
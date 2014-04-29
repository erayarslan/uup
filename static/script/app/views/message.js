define(function (require) {
    "use strict";
    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        models              = require('app/models/message');

    return Backbone.View.extend({
        initialize: function(){
        },
        render: function(options){
            var message = new models.Message({code: options.code});
            message.fetch({
                success: function(){
                    if(message.get("error")) {
                        alert(message.get("error"));
                    } else {
                        alert(message.get("content"));
                    }
                    var Router = require('app/router');
                    var router = new Router();
                    router.navigate('/', {trigger:true});
                }
            });
        }
    });
});
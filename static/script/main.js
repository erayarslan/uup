requirejs.config({
    baseUrl: "static/script/libs",
    paths: {
        'app': '../app',
        'template': '../../templates'
    },
    shim: {
        'jquery' : {
            exports : '$'
        },
        'underscore' : {
            exports : '_'
        },
        'backbone': {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        'ZeroClipboard': {
            exports: 'ZeroClipboard'
        }
    }
});

require(['jquery', 'backbone', 'app/router','ZeroClipboard'], function ($, Backbone, Router, ZeroClipboard) {
    var router = new Router();
    Backbone.history.start();
});
define(function (require) {
    "use strict";
    var Backbone = require('backbone'),

    Message = Backbone.Model.extend({
        urlRoot: 'http://api.uup.nu/',
        idAttribute: 'code'
    })

    return {
        Message: Message
    };
});
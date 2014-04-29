define(function (require) {
    "use strict";
    var Backbone        = require('backbone'),
        IndexView       = require('app/views/index'),
        MessageView     = require('app/views/message'),

        messageView     = new MessageView(),
        indexView       = new IndexView();

    return Backbone.Router.extend({
        routes: {
            '' : 'index',
            ':code' : 'message'
        },
        index: function() {
            indexView.render();
        },
        message: function (code) {
            if(code == "thanks") {
                alert("Thank you for inspiring Burak Ongan!");
                alert("Thank you for .htaccess information Aykut Çegen!")
                alert("and Special thank you for the road to buy bread!")
                this.navigate('/', {trigger:true});
            } else if(code == "me") {
                $.get("http://api.uup.nu/me/", function(data) {
                    var json = JSON.parse(data);
                    for(var i=0;i<json.length;i++) {
                        alert(json[i].content);
                    }
                });
                this.navigate('/', {trigger:true});
            }
            else {
                messageView.render({code:code});
            }
        }
    });
});
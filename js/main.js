/**
 * Created by christinachen on 8/10/16.
 */
require.config({
    "baseUrl" : "/",
    "paths"   : {
        "jquery"     : "/jquery/dist/jquery.min",
        "underscore" : "/underscore/underscore-min",
        "backbone"   : "/backbone/backbone-min",
        "handlebars" : "/handlebars/handlebars.amd.min"
    }
});

require(
    [
        "backbone",
        "router"
    ],
    function(Backbone, Router) {

        var router = new Router();

        /*Backbone.history.start({
            pushState: true
        });*/

        if (!Backbone.history.start({ pushState: true })) router.navigate('404', {trigger:true});
    }
);

/**
 * Created by christinachen on 8/11/16.
 */
define([
    'backbone',
    'handlebars'
],
    function(Backbone, Handlebars) {
        var PictureView = Backbone.View.extend({
            initialize: function() {
                this.source = $('#about-template').html();
            },
            render: function() {
                var template = Handlebars.compile(this.source);
                this.el.innerHTML = template({
                    title : "Tina Quotes",
                    pictures : [{
                        "link" : "tina-belcher-dying.jpg",
                        "caption": "Tina Belcher on floor"
                    }]
                });
                this.setElement(this.el);
                $('#website-content').empty().append(this.$el);
            }
        });

        return PictureView;
});
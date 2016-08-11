define(
    [
        "backbone",
        "handlebars"
    ],
    function(Backbone, Handlebars) {
        var ContactView = Backbone.View.extend({
            initialize: function(options) {
                this.source = $('#contact-us-template').html();
            },

            render: function() {
                var template = Handlebars.compile(this.source);
                this.el.innerHTML = template({
                    title : "Learn more about us"
                });
                this.setElement(this.el);

                $('#website-content').empty().append(this.$el);
            }
        });

        return ContactView;
    }
);

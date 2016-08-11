define(
    [
        "backbone",
        "handlebars"
    ],
    function(Backbone, Handlebars) {
        var AboutView = Backbone.View.extend({
            //template: "<div>{{title}}</div>",
            initialize: function(options) {
                this.source = $('#about-template').html();
            },

            render: function() {
                var template = Handlebars.compile(this.source);
                this.el.innerHTML = template({
                    title : "Learn more about us",
                    bio : "Here are some words."
                });
                this.setElement(this.el);

                $('#website-content').empty().append(this.$el);
            }
        });

        return AboutView;
    }
)

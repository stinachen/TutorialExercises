define(
    [
        "backbone",
        "tutorial",
        "about",
        "picture",
        "contact"
    ],
    function(Backbone, TutorialView, AboutView, PictureView, ContactView) {
        return Backbone.Router.extend({
            routes : {
                "" : "index",
                "about": "about",
                "tina": "tina",
                "contact": "contact",
                "404": "notFound"
            },
            index : function() {
                // var tutorialView = new TutorialView;
            },
            about: function() {
                this.changeActive("about");
                var aboutView = new AboutView();
                aboutView.render();
            },
            tina: function() {
                this.changeActive("tina");
                var tinaView = new PictureView();
                tinaView.render();
            },
            contact: function() {
                this.changeActive("contact");
                var contactView = new ContactView();
                contactView.render();
            },
            notFound: function() {
                $('body').empty().append('<div class="container"><h1>404 Not Found</h1></div>');
            },
            changeActive: function(current) {
                var items = $(".nav-item");
                _.each(items, function(item) {
                    if ($(item).hasClass('active')) {
                        $(item).removeClass('active');
                    }
                    if (item.id === current) {
                        $(item).addClass('active');
                    }
                });
            }
        });
    }
);
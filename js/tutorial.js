/**
 * Created by christinachen on 8/10/16.
 */
define([
    'backbone'
], function(Backbone) {
    // Overrides persistence storage with dummy function.
    // Enables use of Model.destroy() without raising an error.
    Backbone.sync = function(method, model, success, error) {
        success();
    }

    var Item = Backbone.Model.extend({
        defaults: {
            part1: 'hello',
            part2: 'world'
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    // Responsible for rendering each individual Item.
    var ItemView = Backbone.View.extend({
        tagName: 'li',
        className: 'list-group-item',

        events: {
            'click span.swap': 'swap',
            'click span.delete': 'remove'
        },

        initialize: function() {
            _.bindAll(this, 'render', 'unrender', 'swap', 'remove');

            this.model.bind('change', this.render);
            this.model.bind('remove', this.unrender);
        },

        render: function() {
            $(this.el).html('<span style="color: black;">' +
                this.model.get('part1') + ' ' +
                this.model.get('part2') + '</span>' +
                '<span class="swap glyphicon glyphicon-refresh" style="color: midnightblue; padding-left: 10px;"></span>' +
                '<span class="delete glyphicon glyphicon-trash" style="color: darkred;"></span>');
            // For chainable calls.
            return this;
        },

        unrender: function() {
            $(this.el).remove();
        },

        swap: function() {

            var swapped = {
                part1: this.model.get('part2'),
                part2: this.model.get('part1')
            };

            this.model.set(swapped);
        },

        remove: function() {
            this.model.destroy();
        }
    });

    // **ListView class**: Our main app view.
    var ListView = Backbone.View.extend({
        el: $('#bbtutorial'),
        // Where DOM events are bound to View methods.
        events: {
            'click button#add': 'addItem'
        },

        // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
        initialize: function(){
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // fixes loss of context for 'this' within methods

            this.collection = new List();
            this.collection.bind('add', this.appendItem);

            this.counter = 0;

            this.render(); // not all views are self-rendering. This one is.
        },
        // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
        render: function() {
            var _this = this;
            $(this.el).append('<button class="btn btn-default" id="add">Add list item</button>');
            $(this.el).append('<ul class="list-group"></ul>');
            _(this.collection.models).each(function(item) {
                _this.appendItem(item);
            }, this);
        },

        // Custom function called via click event.
        addItem: function() {
            this.counter++;

            var item = new Item();
            item.set({
                part2: item.get('part2') + ' '  + this.counter
            });
            this.collection.add(item);
        },

        // Uses ItemView to delegate Item rendering.
        appendItem: function(item) {

            var itemView = new ItemView({
                model: item
            });

            $('ul', this.el).append(itemView.render().el);
        }
    });

    // **listView instance**: Instantiate main app view.
    var listView = new ListView();
    return listView;
});
var app = app || {};

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    //el: '#body',
    el: '#app-body',

    // Our template for the line of statistics at the bottom of the app.
    //statsTemplate: _.template( $('#stats-template').html() ),
    statsTemplate: _.template($('#cys-template').html()),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
        //'keypress #new-todo': 'createOnEnter',
        //'click #clear-completed': 'clearCompleted',
        //'click #toggle-all': 'toggleAllComplete',


        // For the load-example button
        'click #loadExampleHtmlButton':  'loadExample',
        'click #loadExample':  'loadExample'

    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function () {
        //this.allCheckbox = this.$('#toggle-all')[0];
        //this.$input = this.$('#new-todo');
        //this.$footer = this.$('#footer');
        //this.$main = this.$('#main');
        //
        //this.listenTo(app.Todos, 'add', this.addOne);
        //this.listenTo(app.Todos, 'add', this.addDefaultCytoscape);
        //this.listenTo(app.Todos, 'reset', this.addAll);
        //
        //// New
        //this.listenTo(app.Todos, 'change:completed', this.filterOne);
        //this.listenTo(app.Todos,'filter', this.filterAll);
        //this.listenTo(app.Todos, 'all', this.render);

        this.$('#cy').html('This is Hello World by JQuery');
        //this.addDefaultCytoscape();
        //this.loadExample();

        this.loadExampleButton = $("#load-example-html");
        //this.model.view = this;

        _.bindAll(this, 'render', 'loadExample');
        this.render();



        //app.CytoscapeWorkflows.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function () {
        //var completed = app.Todos.completed().length;
        //var remaining = app.Todos.remaining().length;
        //
        //if (app.Todos.length) {
        //    this.$main.show();
        //    this.$footer.show();
        //
        //    this.$footer.html(this.statsTemplate({
        //        completed: completed,
        //        remaining: remaining
        //    }));
        //
        //    this.$('#filters li a')
        //        .removeClass('selected')
        //        .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
        //        .addClass('selected');
        //} else {
        //    this.$main.hide();
        //    this.$footer.hide();
        //}
        //
        //this.allCheckbox.checked = !remaining;

        //$(this.el).html("<p>Stuff!!!!</p>");
        $(this.el).html("<button id='loadExample'>Load Example</button>");
        return this;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function (todo) {
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
    },

    loadExample: function (evt) {
        evt.preventDefault();
        //this.$('#cy').html('loadExample function called!!');
        alert('loadExample function called!!');
        console.log('loadExample function called!!');


        //var cy = cytoscape({
        //    container: document.getElementById('cy'),
        //
        //    style: cytoscape.stylesheet()
        //        .selector('node')
        //        .css({
        //            'content': 'data(name)',
        //            'shape': 'circle',
        //            'background-color': 'data(color)',
        //            'font-size': 10,
        //            'text-valign': 'bottom',
        //            'color': '#6e6e6e'
        //        }
        //    )
        //        .selector('edge')
        //        .css({
        //            'target-arrow-shape': 'triangle',
        //            'width': 2,
        //            'line-color': '#bfbfbf',
        //            'target-arrow-color': '#bfbfbf'
        //        })
        //
        //        // When selected using a dragged box
        //        .selector(":selected")
        //        .css({
        //            "line-color": "#636363",
        //            "target-arrow-color": "#636363",
        //            "background-blacken": "0.3"
        //        })
        //
        //        .selector('.highlighted')
        //        .css({
        //            'background-color': '#61bffc',
        //            'line-color': '#61bffc',
        //            'target-arrow-color': '#61bffc',
        //            'transition-property': 'background-color, line-color, target-arrow-color',
        //            'transition-duration': '0.5s'
        //        }),
        //
        //    elements: {
        //        nodes: [
        //            {
        //                data: {
        //                    id: 'a',
        //                    name: 'Select populations',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'b',
        //                    name: 'Count',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'c',
        //                    name: 'Filter',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'd',
        //                    name: 'Select first',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'e',
        //                    name: 'Remove beginning',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'f',
        //                    name: 'Sort',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'g',
        //                    name: 'Concatenate datasets',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'h',
        //                    name: 'SmileFinder',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'i',
        //                    name: 'Grapher',
        //                    color: '#D9EDF7'
        //                }
        //            },
        //            {
        //                data: {
        //                    id: 'j',
        //                    name: 'graph',
        //                    color: '#FCF8E3'
        //                }
        //            }
        //
        //        ],
        //
        //        edges: [
        //            {data: {id: 'ab', weight: 1, source: 'a', target: 'b'}}, //Select populations > Count
        //            {data: {id: 'bc', weight: 2, source: 'b', target: 'c'}}, //Count > Filter
        //            {data: {id: 'cd', weight: 3, source: 'c', target: 'd'}}, //Filter > Select first
        //            {data: {id: 'ce', weight: 4, source: 'c', target: 'e'}}, //Filter > Remove beginning
        //            {data: {id: 'ef', weight: 5, source: 'e', target: 'f'}}, //Remove beginning > Sort
        //            {data: {id: 'dg', weight: 6, source: 'd', target: 'g'}}, //Select First > Concatenate datasets
        //            {data: {id: 'fg', weight: 6, source: 'f', target: 'g'}}, //Sort > Concatenate datasets
        //            {data: {id: 'gh', weight: 7, source: 'g', target: 'h'}}, //Concatenate datasets > SmileFinder
        //            {data: {id: 'hi', weight: 8, source: 'h', target: 'i'}}, //SmileFinder > Grapher
        //            {data: {id: 'ij', weight: 8, source: 'i', target: 'j'}}  //Grapher > graph
        //        ]
        //    },
        //
        //    layout: {
        //        name: 'dagre',
        //        directed: true,
        //        roots: '#a',
        //        padding: 10
        //    }
        //});
        //
        //var params = {
        //    name: 'dagre',
        //    directed: true,
        //    roots: '#a',
        //    padding: 10,
        //    rankDir: 'TB'
        //};
        //var layout = makeLayout();
        //var running = false;
        //
        //cy.on('layoutstart', function () {
        //    running = true;
        //}).on('layoutstop', function () {
        //    running = false;
        //});
        //
        //layout.run();
        //
        //function makeLayout(opts) {
        //    for (var i in opts) {
        //        params[i] = opts[i];
        //    }
        //    return cy.makeLayout(params);
        //}


    },

    // Add at the default cytoscape workflow appending its element to the `<ul>`.
    addDefaultCytoscape: function () {
        //var view = new app.CysView({ model: todo });
        //$('#todo-list').append( view.render().el );

        this.$('#cy').html('addDefaultCytoscape function called!!');
    },

    // Add all items in the **Todos** collection at once.
    addAll: function () {
        this.$('#todo-list').html('');
        app.Todos.each(this.addOne, this);
    },

    // New
    filterOne: function (todo) {
        todo.trigger('visible');
    },

    // New
    filterAll: function () {
        app.Todos.each(this.filterOne, this);
    },


    // New
    // Generate the attributes for a new Todo item.
    newAttributes: function () {
        return {
            title: this.$input.val().trim(),
            order: app.Todos.nextOrder(),
            completed: false
        };
    },

    // New
    // If you hit return in the main input field, create new Todo model,
    // persisting it to localStorage.
    createOnEnter: function (event) {
        if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
            return;
        }

        app.Todos.create(this.newAttributes());

        this.$input.val('');
    },

    // New
    // Clear all completed todo items, destroying their models.
    clearCompleted: function () {
        _.invoke(app.Todos.completed(), 'destroy');
        return false;
    },

    // New
    toggleAllComplete: function () {
        var completed = this.allCheckbox.checked;

        app.Todos.each(function (todo) {
            todo.save({
                'completed': completed
            });
        });
    }
});
var app = app || {};

app.NavBarView = Backbone.View.extend({

    cyInstance: null,
    cy_model: null,
    selected_elements: null,

    initialize: function () {
        cy_model = new app.CytoscapeWorkflow();
        this.render();
    },
    render: function () {
        // Compile the template using underscore
        var template = _.template($("#navbar_template").html(), {});
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(template);
    },
    renderCytoscape: function (cy, params) {

        // Check cyInstance is not null
        if (cyInstance === null)
        {
            console.log("cyInstance is undefined");
        }

        var layout = makeLayout();
        var running = false;

        cy.on('layoutstart', function () {
            running = true;
        }).on('layoutstop', function () {
            running = false;
        });

        // Detect select on nodes and edges
        //var selected_elements;
        cy.on('select', function (evt) {
            console.log('selected: ' + evt.cyTarget.id());
            selected_elements = cy.elements(':selected');
        });

        cy.panningEnabled(true);
        cy.boxSelectionEnabled(true);

        layout.run();

        function makeLayout(opts) {
            for (var i in opts) {
                params[i] = opts[i];
            }
            return cy.makeLayout(params);
        }
    },
    events: {
        'click #loadExampleHtmlButton': 'loadExample',
        'click #layout_lr': 'layoutLeftRight',
        'click #layout_tb': 'layoutTopBottom',
        'click #align_left': 'alignLeft'
    },
    layoutTopBottom: function (evt) {
        evt.preventDefault();
        console.log("Left right layout selected!");
        var params = {
            name: 'dagre',
            directed: true,
            roots: '#a',
            padding: 10,
            rankDir: 'TB'
        };
        this.renderCytoscape(cyInstance, params);

    },
    layoutLeftRight: function (evt) {
        evt.preventDefault();
        console.log("Left right layout selected!");
        var params = {
                    name: 'dagre',
                    directed: true,
                    roots: '#a',
                    padding: 10,
                    rankDir: 'LR'
                };
        this.renderCytoscape(cyInstance, params);

    },
    loadExample: function (evt) {
        // Button clicked, you can access the element that was clicked with
        // event.currentTarget
        evt.preventDefault();
        console.log("Load example button clicked!");

        // Create cytoscape instance using default model settings and
        // example nodes and edges
        cyInstance = cytoscape({
            container: cy_model.defaults.container,
            style: cy_model.defaults.style,
            elements: {
                nodes: [
                    {
                        data: {
                            id: 'a',
                            name: 'Select populations',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'b',
                            name: 'Count',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'c',
                            name: 'Filter',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'd',
                            name: 'Select first',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'e',
                            name: 'Remove beginning',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'f',
                            name: 'Sort',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'g',
                            name: 'Concatenate datasets',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'h',
                            name: 'SmileFinder',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'i',
                            name: 'Grapher',
                            color: '#D9EDF7'
                        }
                    },
                    {
                        data: {
                            id: 'j',
                            name: 'graph',
                            color: '#FCF8E3'
                        }
                    }

                ],

                edges: [
                    {data: {id: 'ab', weight: 1, source: 'a', target: 'b'}}, //Select populations > Count
                    {data: {id: 'bc', weight: 2, source: 'b', target: 'c'}}, //Count > Filter
                    {data: {id: 'cd', weight: 3, source: 'c', target: 'd'}}, //Filter > Select first
                    {data: {id: 'ce', weight: 4, source: 'c', target: 'e'}}, //Filter > Remove beginning
                    {data: {id: 'ef', weight: 5, source: 'e', target: 'f'}}, //Remove beginning > Sort
                    {data: {id: 'dg', weight: 6, source: 'd', target: 'g'}}, //Select First > Concatenate datasets
                    {data: {id: 'fg', weight: 6, source: 'f', target: 'g'}}, //Sort > Concatenate datasets
                    {data: {id: 'gh', weight: 7, source: 'g', target: 'h'}}, //Concatenate datasets > SmileFinder
                    {data: {id: 'hi', weight: 8, source: 'h', target: 'i'}}, //SmileFinder > Grapher
                    {data: {id: 'ij', weight: 8, source: 'i', target: 'j'}}  //Grapher > graph
                ]
            },
            layout: cy_model.defaults.layout,
            ready: function(){ console.log('ready') }
        });

        var params = {
            name: 'dagre',
            directed: true,
            roots: '#a',
            padding: 10,
            rankDir: 'TB'
        };
        console.log(cyInstance);
        this.renderCytoscape(cyInstance, params);
    }
});

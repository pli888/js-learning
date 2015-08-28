var app = app || {};

// CytoscapeWorkflow Model
// ----------
// Our basic **CytoscapeWorkflow** model has `style`, `layout` and `elements`
// attributes.

app.CytoscapeWorkflow = Backbone.Model.extend({

    initialize: function(){
        //var cy = cytoscape({
        //    container: document.getElementById('cy'),
        //    ready: function(){ console.log('ready') }
        //});

        console.log('This CytoscapeWorkflow model has been initialized.');
    },

    // Default attributes ensure that each cytoscape workflow created has
    // `style`, `layout` and `elements` keys.
    defaults: {
        container: document.getElementById('cy'),

        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'shape': 'circle',
                'background-color': 'data(color)',
                'font-size': 10,
                'text-valign': 'bottom',
                'color': '#6e6e6e'
            })
            .selector('edge')
            .css({
                'target-arrow-shape': 'triangle',
                'width': 2,
                'line-color': '#bfbfbf',
                'target-arrow-color': '#bfbfbf'
            })

            // When selected using a dragged box
            .selector(":selected")
            .css({
                "line-color": "#636363",
                "target-arrow-color": "#636363",
                "background-blacken": "0.3"
            })

            .selector('.highlighted')
            .css({
                'background-color': '#61bffc',
                'line-color': '#61bffc',
                'target-arrow-color': '#61bffc',
                'transition-property': 'background-color, line-color, target-arrow-color',
                'transition-duration': '0.5s'
            }),
        layout: {
            name: 'dagre',
            directed: true,
            roots: '#a',
            padding: 10
        }
    },
    // Toggle the `completed` state of this todo item.
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }

});


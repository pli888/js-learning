/**
 * Created by peterli on 25/8/15.
 */

//var app = {}; // create namespace for our app

app.Todo = Backbone.Model.extend({
//var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggle: function(){
        this.save({ completed: !this.get('completed')});
    }
});

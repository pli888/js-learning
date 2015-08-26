/**
 * Created by peterli on 25/8/15.
 */
app.Router = Backbone.Router.extend({
//var Router = Backbone.Router.extend({
    routes: {
        '*filter' : 'setFilter'
    },
    setFilter: function(params) {
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
    }
});
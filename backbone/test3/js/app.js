// Used for instantiating app-view.js on loading index.html
// This is done using jQuery's ready()

var app = app || {};
//var ENTER_KEY = 13;

$(function () {
    // Kick things off by creating the **App**
    new app.AppView();
    new app.RightNavBarView({el: $("#navbar_right_container")});

});
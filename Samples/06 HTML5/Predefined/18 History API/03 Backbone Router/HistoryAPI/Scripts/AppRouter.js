/// <reference path="backbone.js" />

(function () {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            ":viewName": "view",
        },

        home: function () {
            App.home();
        },

        view: function (viewName) {
            App.switchView($("." + viewName));
        }
    });

    window.AppRouter = AppRouter;
})();

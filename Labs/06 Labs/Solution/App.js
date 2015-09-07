/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

ContactBook.app = (function (book, ItemsView, ContactNewView) {
    
    function App() {
        this.currentView = null;
        this.currentGroup = null;
    }

    App.prototype.onLoad = function () {
        var me = this;

        book.load(
            function () {
                me.currentGroup = book.root;
                me.contactNewView = new ContactBook.ContactNewView($(".contact-new-view"));
                me.itemsView = new ContactBook.ItemsView($(".items-view"));
                me.siteMenu = new ContactBook.SiteMenu($(".site-menu"));
                    
                me.switchView(me.itemsView);
            },
            function (err) {
                alert("ERROR: " + err);
            });
    }

    App.prototype.changeCurrentGroup = function (group) {
        this.currentGroup = group;
    }

    App.prototype.switchView = function (view) {
        if (this.currentView) {
            this.currentView.element.removeClass("active");
        }

        this.currentView = view;

        if (this.currentView) {
            this.currentView.element.addClass("active");
        }

        if (this.currentView.onActiviated) {
            this.currentView.onActiviated();
        }
    }

    $(function () {
        app.onLoad();
    });

    var app = new App();
    return app;
    
})(ContactBook.book);

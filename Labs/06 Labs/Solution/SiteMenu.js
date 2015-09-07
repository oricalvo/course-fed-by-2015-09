var ContactBook = ContactBook || {};

ContactBook.SiteMenu = (function (app) {
    function SiteMenu(element) {
        var me = this;

        this.element = element;

        this.element.find(".add-contact").click(function () {
            app.switchView(app.contactNewView);
        });
    }
        
    return SiteMenu;
})(ContactBook.app);

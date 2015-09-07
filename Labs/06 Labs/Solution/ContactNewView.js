var ContactBook = ContactBook || {};

ContactBook.ContactNewView = (function (app, book, Contact) {
    function ContactNewView(element) {
        var me = this;

        this.element = element;
        this.inputName = this.element.find(".field.name input");
        this.inputEmail = this.element.find(".field.email input");
        this.errorMessage = this.element.find(".error-message");

        this.element.find("button").click(function () {
            me.onButtonAddClicked();
        });
    }

    ContactNewView.prototype.onButtonAddClicked = function () {

        this.clearError();

        var name = this.inputName.val();
        var email = this.inputEmail.val();

        if (!name) {
            this.showError("Please specify a name");
            return;
        }

        var contact = new Contact(name, email);
        app.currentGroup.addItem(contact);
        book.save();

        app.switchView(app.itemsView);
    }

    ContactNewView.prototype.clearError = function () {
        this.errorMessage.text("");
        this.errorMessage.removeClass("active");
    }

    ContactNewView.prototype.showError = function (message) {
        this.errorMessage.text(message);
        this.errorMessage.addClass("active");
    }
        
    return ContactNewView;
})(ContactBook.app, ContactBook.book, ContactBook.Contact);

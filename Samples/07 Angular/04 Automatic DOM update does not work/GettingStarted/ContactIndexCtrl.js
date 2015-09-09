(function () {

    function ContactIndexCtrl(contactService) {
        var me = this;

        this.contactService = contactService;

        contactService.getAll().then(function (contacts) {
            throw new Error("OOPs");

            me.contacts = contacts;
        }).catch(function (err) {
            alert("ERROR");
        });
    }

    ContactIndexCtrl.prototype.remove = function (contact) {
        this.contactService.removeById(contact.id);
    }

    angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);

})();

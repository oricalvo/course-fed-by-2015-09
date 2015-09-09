(function () {

    function ContactIndexCtrl(contactService) {
        this.contactService = contactService;
        this.contacts = contactService.getAll();
    }

    ContactIndexCtrl.prototype.remove = function (contact) {
        this.contactService.removeById(contact.id);
    }

    angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);

})();

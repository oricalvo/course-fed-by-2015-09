(function () {

    function ContactNewCtrl(contactService) {
        this.contactService = contactService;
    }

    ContactNewCtrl.prototype.add = function () {
        if (!this.newName) {
            return;
        }

        var name = this.newName;
        var email = name + "@gmail.com";

        this.contactService.add(name, email);
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})();

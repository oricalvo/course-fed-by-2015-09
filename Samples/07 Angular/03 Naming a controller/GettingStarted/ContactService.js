(function () {

    function ContactService() {
        this.nextId = -1;

        this.contacts = [
            { id: 1, name: "Ori", email: "ori@gmail.com" },
            { id: 2, name: "Roni", email: "roni@gmail.com" },
        ];
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    }

    ContactService.prototype.add = function (name, email) {
        var contact = {
            id: --this.nextId,
            name: name,
            email: email,
        };

        this.contacts.push(contact);
    }

    ContactService.prototype.removeById = function (id) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id) {
                this.contacts.splice(i, 1);

                return;
            }
        }
    }

    angular.module("MyApp").service("contactService", ContactService);

})();

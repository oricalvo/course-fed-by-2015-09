(function () {

    function ContactService($rootScope, $timeout, $http) {
        this.nextId = -1;

        this.contacts = [
            { id: 1, name: "Ori", email: "ori@gmail.com" },
            { id: 2, name: "Roni", email: "roni@gmail.com" },
        ];

        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$timeout = $timeout;
    }

    ContactService.prototype.getAll = function () {

        return this.$http.get("/contacts.html").then(function (response) {
            return response.data;
        });

        //return this.contacts;
    }

    ContactService.prototype.add = function (name, email) {
        var contact = {
            id: --this.nextId,
            name: name,
            email: email,
        };

        var me = this;

        this.$timeout(function () {
            me.contacts.push(contact);
        }, 1000);

        //setTimeout(function () {
        //    me.contacts.push(contact);

        //    me.$rootScope.$apply();
        //}, 1000);
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

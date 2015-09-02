var MyApp = MyApp || {};

MyApp.Storage = (function (Network) {
    var contacts = null;

    return {
        getAllContacts: function () {
            console.log("getAllContacts");

            if (!contacts) {
                contacts = Network.httpGet("/api/contact");
            }

            return contacts;
        }
    };

})(MyApp.Network);

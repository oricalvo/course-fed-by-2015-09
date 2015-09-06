(function () {

    var contacts = [];

    var buttonAdd = $(".button-add");
    if (buttonAdd.length != 1) {
        throw new Error(".button-add was not found");
    }

    var inputName = $(".input-new-name");

    var ulContacts = $(".contacts");

    buttonAdd.on("click", function () {
        var name = inputName.val();
        if (!name) {
            alert("Please specify a name");

            return;
        }

        var contact = {
            name: name,
        };

        contacts.push(contact);

        updateContactList();
    });

    function updateContactList() {
        ulContacts.empty();

        contacts.forEach(function (contact) {
            var li = $("<li />");
            li.text(contact.name);
            li.data("contact", contact);

            var button = $("<button>Delete</button>");
            button.appendTo(li);
            button.on("click", function () {

                var contact = li.data("contact");
                removeContact(contact);

                li.remove();
            });

            ulContacts.append(li);
        });
    }

    function removeContact(contact) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i] == contact) {
                contacts.splice(i, 1);

                return;
            }
        }
    }
})();

/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.bookStorage = (function (Group, Contact) {

    function BookStorage() {
    }

    BookStorage.prototype.save = function (root) {
        var json = JSON.stringify(root);
        localStorage.setItem("book", json);
    }

    BookStorage.prototype.load = function () {
        var json = localStorage.getItem("book");
        if (json) {
            return this.deserialize(JSON.parse(json));
        }
    }

    BookStorage.prototype.deserializeMany = function (group, dtos) {
        var me = this;

        dtos.forEach(function (dto) {
            var item = me.deserialize(dto);
            group.addItem(item);
        });
    }

    BookStorage.prototype.deserialize = function (dto) {
        var item;

        if (dto.hasOwnProperty("items")) {
            item = new Group(dto.name);
            this.deserializeMany(item, dto.items);
        }
        else {
            item = new Contact(dto.name, dto.email);
        }

        return item;
    }

    var bookStorage = new BookStorage();
    return bookStorage;

})(ContactBook.Group, ContactBook.Contact);


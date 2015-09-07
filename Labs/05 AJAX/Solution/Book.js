/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.book = (function (Group, Contact) {

    function Book() {
        this.root = null;
    }

    Book.prototype.load = function (success, error) {
        var me = this;

        $.ajax({
            type: "GET",
            url: "book.html",
            dataType: "json",
            success: function (dto) {
                me.root = me.fromDTO(dto);

                success();
            },
            error: function () {
                error(new Error("Failed to load data from server"));
            }
        });
    }

    Book.prototype.fromDTOs = function (group, dtos) {
        var me = this;

        dtos.forEach(function (dto) {
            var item = me.fromDTO(dto);
            group.addItem(item);
        });
    }

    Book.prototype.fromDTO = function (dto) {
        var item;

        if (dto.hasOwnProperty("items")) {
            item = new Group(dto.name);
            this.fromDTOs(item, dto.items);
        }
        else {
            item = new Contact(dto.name, dto.email);
        }

        return item;
    }

    var book = new Book();
    return book;

})(ContactBook.Group, ContactBook.Contact);


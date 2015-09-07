/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.book = (function (bookStorage) {

    function Book() {
        this.root = null;
    }

    Book.prototype.save = function () {
        bookStorage.save(this.root);
    }

    Book.prototype.load = function (success, error) {
        this.root = bookStorage.load() || new Group("~");

        success();

        //$.ajax({
        //    type: "GET",
        //    url: "book.html",
        //    dataType: "json",
        //    success: function (dto) {
        //        me.root = bookStorage.deserialize(dto);

        //        success();
        //    },
        //    error: function () {
        //        error(new Error("Failed to load data from server"));
        //    }
        //});
    }

    var book = new Book();
    return book;

})(ContactBook.bookStorage);


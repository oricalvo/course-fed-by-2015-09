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
        var me = this;

        bookStorage.load(
            function (root) {
                me.root = root;

                success();
            },
            function (err) {
                me.root = new Group("~");

                error(err);
            });
    }

    var book = new Book();
    return book;

})(ContactBook.bookStorage);


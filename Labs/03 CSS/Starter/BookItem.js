var ContactBook = ContactBook || {};

ContactBook.BookItem = (function () {

    function BookItem() {
        this.parent = null;
    }

    BookItem.prototype.onAdded = function (parent) {
        this.parent = parent;
    }

    return BookItem;
})();

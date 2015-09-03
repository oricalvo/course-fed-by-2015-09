var ContactBook = ContactBook || {};

ContactBook.Group = (function (BookItem) {

    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.dump = function () {
        console.log(this.name);

        this.items.forEach(function (item) {
            item.dump();
        });
    }

    Group.prototype.addItem = function (item) {
        this.items.push(item);

        item.onAdded(this);
    }

    return Group;

})(ContactBook.BookItem);

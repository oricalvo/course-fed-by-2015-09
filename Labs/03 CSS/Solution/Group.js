////var header = document.getElementById("header");
////header.innerHTML = "ABC";

//var button = document.getElementById("button1");
//button.attachEvent()

//button.addEventListener(

/// <reference path="BookItem.js" />

var ContactBook = ContactBook || {};

ContactBook.Group = (function (BookItem) {
    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.addItem = function (item) {
        this.items.push(item);

        item.onAdded(this);
    }

    Group.prototype.dump = function () {
        console.log(this.name);

        this.items.forEach(function (item) {
            item.dump();
        });
    }

    return Group;
})(ContactBook.BookItem);

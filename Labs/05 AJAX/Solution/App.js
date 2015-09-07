/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

(function(ItemsView, book) {
    
    $(function () {

        book.load(
            function () {
                new ItemsView($(".items-view"));
            },
            function (err) {
                alert("ERROR: " + err);
            });
    });
    
})(ContactBook.ItemsView, ContactBook.book);
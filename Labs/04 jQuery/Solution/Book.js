/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.book = (function (Group, Contact) {
    
    var book = createBook();
    book.dump();
    return book;

    function createBook() {
        var root = new Group("~");

        var friends = new Group("Friends");
        root.addItem(friends);

        var udi = new Contact("Udi", "udi@gmail.com");
        friends.addItem(udi);

        var tommy = new Contact("Tommy", "tommy@gmail.com");
        friends.addItem(tommy);

        var family = new Group("Family");
        root.addItem(family);

        var roni = new Contact("Roni", "roni@gmail.com");
        family.addItem(roni);

        var coworkers = new Group("Co-Workers");
        root.addItem(coworkers);

        var shlomi = new Contact("Shlomi", "shlomi@gmail.com");
        coworkers.addItem(shlomi);

        var ori = new Contact("Ori", "ori@gmail.com");
        root.addItem(ori);

        return root;
    }
})(ContactBook.Group, ContactBook.Contact);

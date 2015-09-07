var ContactBook = ContactBook || {};

ContactBook.ItemsView = (function (book, Contact, Group) {
    function ItemsView(element) {
        var me = this;

        this.element = element;
        this.currentGroup = book.root;
        
        this.template = '<div class="selection"><input type="checkbox" /></div><span class="title"></span><span class="sub-title"></span>';
                        
        this.updateUI();

        this.element.on("click", "li", function () {
            me.itemClicked($(this));
        });
    }

    ItemsView.prototype.itemClicked = function (li) {
        var item = li.data("item");

        if (item == "up") {
            this.currentGroup = this.currentGroup.parent;
            this.updateUI();
        }
        else if (item instanceof Group) {
            this.currentGroup = item;
            this.updateUI();
        }
    }
    
    ItemsView.prototype.updateUI = function(){
        var me = this;
        
        me.element.empty();

        if (me.currentGroup.parent != null) {
            var li = $("<li />").appendTo(me.element).html(me.template);

            li.find(".title").text("[..]");
            li.data("item", "up");
        }

        this.currentGroup.items.forEach(function(item){
            var li = $("<li />").appendTo(me.element).html(me.template);

            li.data("item", item);

            li.find(".title").text(item.name);
            
            if(item instanceof Contact){
                li.find(".sub-title").text(item.email);
            }
        });
    }
    
    return ItemsView;
})(ContactBook.book, ContactBook.Contact, ContactBook.Group);

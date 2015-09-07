var ContactBook = ContactBook || {};

ContactBook.ItemsView = (function (app, Contact, Group) {
    function ItemsView(element) {
        var me = this;

        this.element = element;
        
        this.template = '<div class="selection"><input type="checkbox" /></div><span class="title"></span><span class="sub-title"></span>';
                        
        this.updateUI();

        this.element.on("click", "li", function () {
            me.itemClicked($(this));
        });
    }

    ItemsView.prototype.itemClicked = function (li) {
        var item = li.data("item");

        if (item == "up") {
            app.changeCurrentGroup(app.currentGroup.parent);
            this.updateUI();
        }
        else if (item instanceof Group) {
            app.changeCurrentGroup(item);
            this.updateUI();
        }
    }
    
    ItemsView.prototype.onActiviated = function () {
        this.updateUI();
    }

    ItemsView.prototype.updateUI = function(){
        var me = this;
        
        me.element.empty();

        if (app.currentGroup.parent != null) {
            var li = $("<li />").appendTo(me.element).html(me.template);

            li.find(".title").text("[..]");
            li.data("item", "up");
        }

        app.currentGroup.items.forEach(function(item){
            var li = $("<li />").appendTo(me.element).html(me.template);

            li.data("item", item);

            li.find(".title").text(item.name);
            
            if(item instanceof Contact){
                li.find(".sub-title").text(item.email);
            }
        });
    }
    
    return ItemsView;
})(ContactBook.app, ContactBook.Contact, ContactBook.Group);

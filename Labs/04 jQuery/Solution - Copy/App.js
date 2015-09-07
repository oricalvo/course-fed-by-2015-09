/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

(function(ItemsView) {
    
    $(function(){
        new ItemsView($(".items-view"));
    });
    
})(ContactBook.ItemsView);
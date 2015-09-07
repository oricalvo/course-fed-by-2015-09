(function () {
    $(function () {
        var el = $(".view1");

        el.find("a").click(function () {
            App.navigate("view2");

            return false;
        });
    });
})();

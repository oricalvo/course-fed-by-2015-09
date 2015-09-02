function Point(x, y) {
    return {
        dump: function () {
            console.log(x + ", " + y);
        },

        //move: function (dx, dy) {
        //    x += dx;
        //    y += dy;
        //}
    };
}

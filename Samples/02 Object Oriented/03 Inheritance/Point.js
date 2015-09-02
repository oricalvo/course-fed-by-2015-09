
var Point = (function () {
    "use strict";

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.dump = function () {
        console.log("X = " + this.x);
        console.log("Y = " + this.y);
    }

    return Point;
})();

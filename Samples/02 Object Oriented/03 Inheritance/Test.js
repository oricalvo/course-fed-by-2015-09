
(function () {
    "use strict";

    var pt1 = new PointEx(5, 10, 20);
    console.log(pt1);
    pt1.dump();

    console.log(pt1 instanceof PointEx);
    console.log(pt1 instanceof Object);
    console.log(pt1 instanceof Point);

    //var pt2 = new Point(10, 20);
    //pt2.dump();

    //console.log(pt1.dump == pt2.dump);
})();

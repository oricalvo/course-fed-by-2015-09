var PointEx = (function () {

    "use strict";

    function PointEx(x, y, z) {

        Point.call(this, x, y);

        this.z = z;
    }

    PointEx.prototype = Object.create(Point.prototype);

    PointEx.prototype.dump = function () {

        //var func = Point.prototype.dump;
        //func();
        //func.call(this);

        Point.prototype.dump.call(this);

        console.log("Z = " + this.z);
    }

    //for (var methodName in Point.prototype) {
    //    PointEx.prototype[methodName] = Point.prototype[methodName];
    //}

    //PointEx.prototype.dump = Point.prototype.dump;

    return PointEx;

})();


function func() {
}

func();
funcs.call(obj);

var dummy = {};
dummy.func = func;
dummy.func();


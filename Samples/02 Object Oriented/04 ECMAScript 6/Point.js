var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dump = function () {
    };
    Point.prototype.move = function (dx, dy) {
    };
    return Point;
})();
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    PointEx.prototype.dump = function () {
        _super.prototype.dump.call(this);
    };
    return PointEx;
})(Point);

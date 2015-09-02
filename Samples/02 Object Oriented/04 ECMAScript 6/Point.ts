class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
    }

    move(dx, dy) {
    }
}

class PointEx extends Point {
    z;

    constructor(x, y, z) {
        super(x, y);

        this.z = z;
    }

    dump() {
        super.dump();
    }
}

var pt: Point = new Point(5, 10);

(<any>pt).blabla();

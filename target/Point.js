class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get X() {
        return this._x;
    }
    set X(value) {
        this._x = value;
    }
    get Y() {
        return this._y;
    }
    set Y(value) {
        this._y = value;
    }
}
export default Point; //ES6/

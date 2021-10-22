define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Point = void 0;
    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }
        get getX() {
            return this._x;
        }
        set setX(value) {
            this._x = value;
        }
        get getY() {
            return this._y;
        }
        set setY(value) {
            this._y = value;
        }
    }
    exports.Point = Point;
});

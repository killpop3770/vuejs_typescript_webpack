define(["require", "exports", "./Point"], function (require, exports, Point_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Cam {
        constructor(camModel) {
            this._camModel = camModel;
        }
        get camModel() {
            return this._camModel;
        }
        set camModel(value) {
            this._camModel = value;
        }
        get camUrl() {
            return this._camUrl;
        }
        set camUrl(value) {
            this._camUrl = value;
        }
        get camUser() {
            return this._camUser;
        }
        set camUser(value) {
            this._camUser = value;
        }
        get camPwd() {
            return this._camPwd;
        }
        set camPwd(value) {
            this._camPwd = value;
        }
        get camIsActive() {
            return this._camIsActive;
        }
        set camIsActive(value) {
            this._camIsActive = value;
        }
        get camGroup() {
            return this._camGroup;
        }
        set camGroup(value) {
            this._camGroup = value;
        }
        get camName() {
            return this._camName;
        }
        set camName(value) {
            this._camName = value;
        }
        get camRoi() {
            return this._camRoi;
        }
        set camRoi(value) {
            this._camRoi = value;
        }
    }
    let cam0 = new Cam("hiwatch DS-I214W");
    cam0.camIsActive = false;
    cam0.camUrl = "http://admin:coolGrap356@192.168.5.65/ISAPI/Streaming/channels/101/picture?snapShotImageType=JPEG";
    cam0.camUser = "admin";
    let test_point0 = new Point_1.Point(13, 42);
    let test_point1 = new Point_1.Point(13, 42);
    let test_point2 = new Point_1.Point(13, 42);
    let list_of_points = [test_point0, test_point1, test_point2];
    cam0.camRoi = list_of_points;
});

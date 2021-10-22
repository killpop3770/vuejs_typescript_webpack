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
export default Cam;

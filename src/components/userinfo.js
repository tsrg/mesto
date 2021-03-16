import Popup from './popup.js';

export class UserInfo {

    constructor (data) {
        this._name = document.querySelector(data.name);
        this._authorInfo = document.querySelector(data.authorInfo);
    }

    getUserInfo() {
        const user = {};
        user.name = this._name;
        user.info = this._authorInfo;
        return user;
    }

    setUserInfo(userName, userInfo) {
        this._name = userName;
        this._authorInfo = userInfo;
    }
}
export default class UserInfo {

    constructor (data) {
        this._nameSelector = data.name;
        this._authorInfoSelector = data.authorInfo;
    }

    getUserInfo() {
        let user = {};
        user.name = document.querySelector(this._nameSelector).textContent;
        user.info = document.querySelector(this._authorInfoSelector).textContent;
        return user;
    }

    setUserInfo(userName, userInfo) {
        document.querySelector(this._nameSelector).textContent = userName;
        document.querySelector(this._authorInfoSelector).textContent = userInfo;
    }
}
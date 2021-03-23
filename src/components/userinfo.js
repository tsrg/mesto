export default class UserInfo {

    constructor (data) {
        this._nameSelector = data.name;
        this._authorInfoSelector = data.authorInfo;
        this._authorName = document.querySelector(this._nameSelector);
        this._authorInfo = document.querySelector(this._authorInfoSelector);
    }

    getUserInfo() {
        const user = {};
        user.name = this._authorName.textContent;
        user.info = this._authorInfo.textContent;
        return user;
    }

    setUserInfo(userName, userInfo) {
        this._authorName.textContent = userName;
        this._authorInfo.textContent = userInfo;
    }
}
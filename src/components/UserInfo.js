export default class UserInfo {

    constructor (data) {
        this._nameSelector = data.name;
        this._authorInfoSelector = data.authorInfo;
        this._authorAvatarSelector = data.avatar;
        this._authorName = document.querySelector(this._nameSelector);
        this._authorInfo = document.querySelector(this._authorInfoSelector);
        this._authorAvatar = document.querySelector(this._authorAvatarSelector);
        this._userId = null;
    }

    getUserInfo() {
        const user = {};
        user.name = this._authorName.textContent;
        user.info = this._authorInfo.textContent;
        return user;
    }

    setUserInfo(userName, userInfo, userId) {
        this._authorName.textContent = userName;
        this._authorInfo.textContent = userInfo;
        this._userId = userId;
    }

    setUserAvatar(userAvatar) {
        this._authorAvatar.src = userAvatar;
    }

    userId() {
        return this._userId;
    }
}
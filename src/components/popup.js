
export default class Popup {

    constructor (selector) {
        this._popupContainer = document.querySelector(selector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            document.querySelector('.popup_opened').classList.remove('popup_opened');
        }
    }

    open() {
        this._popupContainer.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupContainer.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popupContainer.querySelector('.popup__close-btn').addEventListener('click', () => {this.close()});
    }
}
export default class Popup {

    constructor (popupSelector) {
        this._popupContainer = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popupContainer.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        this._popupContainer.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popupContainer.querySelector('.popup__close-btn').addEventListener('click', () => {this.close()});
        this._popupContainer.querySelector('.popup__overlay').addEventListener('click', () => {this.close()});
    }
}
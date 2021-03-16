

export class Popup {

    constructor (selector) {
        this._popupContainer = document.querySelector(selector);
    }

    _handleEscClose() {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popupContainer.classList.add('popup_opened');
    }

    close() {
        this._popupContainer.classList.remove('popup_opened');
    }

    setEventListeners() {
        this._popupContainer.addEventListener('keydown', this._handleEscClose);
        this._popupContainer.querySelector('.popup__close-btn').addEventListener('clik', function () {
            this.close();
        });
    }
}
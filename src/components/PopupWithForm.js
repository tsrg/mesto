import Popup from './popup.js';

export class PopupWithForm extends Popup {

    constructor (selector, formSubmit) {
        this._popupContainer = document.querySelector(selector);;
        this._formSubmit = formSubmit;
        this._form = this._popupContainer.querySelector('.popup__form');
    }

    _getInputValues() {
        return this._form.elements;
    }

    setEventListeners() {
        this._popupContainer.addEventListener('keydown', this._handleEscClose);
        this._popupContainer.querySelector('.popup__close-btn').addEventListener('clik', function () {
            this.close();
        });
        this._form.addEventListener('submit', formSubmit);
    }

    close() {
        this._form.reset();
        this._popupContainer.classList.remove('popup_opened');
    }
}
import Popup from './popup.js';

export default class PopupWithForm extends Popup {

    constructor (selector, formSubmit) {
        super(selector);
        this._popupContainer = document.querySelector(selector);
        this._formSubmit = formSubmit;
        this._form = this._popupContainer.querySelector('.popup__form');
    }

    _getInputValues() {
        return this._form.elements;
    }

    setEventListeners() {
        this._popupContainer.querySelector('.popup__close-btn').addEventListener('click', () => {this.close()});
        this._form.addEventListener('submit', this._formSubmit);
    }

    close() {
        this._form.reset();
        this._popupContainer.classList.remove('popup_opened');
    }
}
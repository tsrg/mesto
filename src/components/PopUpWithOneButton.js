import Popup from './PopUp.js';

export default class PopupWithOneButton extends Popup {
    
    constructor (popupSelector, submitFormHandler) {
        super(popupSelector);
        this._popupContainer = document.querySelector(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupContainer.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFormHandler);
    }


open(cont) {
    super.open();
    this._card = cont.target.parentElement;
}

cardId() {
    return this._card;
}
}
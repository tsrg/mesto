import Popup from './PopUp.js';

export default class PopupWithForm extends Popup {

    constructor (popupSelector, submitFormHandler) {
        super(popupSelector);
        this._popupContainer = document.querySelector(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupContainer.querySelector('.popup__form');
    }

    _getInputValues() {
        const formElements = this._form.elements;
        const formValues = {};
        for (let i = 0; i < formElements.length; i++) {
            if ( formElements[i].nodeName === "INPUT" && formElements[i].type === "text" || formElements[i].type === "url") {
                formValues[formElements[i].name] = formElements[i].value;
            }
        }
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {this._submitFormHandler(evt, this._getInputValues())});
    }

    close() {
        super.close();
        this._form.reset();
    }
}
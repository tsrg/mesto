import Popup from './popup.js';

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
            if ( formElements[i].nodeName === "INPUT" && formElements[i].type === "text") {
                formValues[formElements[i].name] = formElements[i].value;
            }
        }
        return formValues;
    }

    clearWarnings() {
        const warnings = this._popupContainer.querySelectorAll('.popup__input-warning_active');
        if (warnings.length > 0) {
        warnings.forEach(element => {
            element.classList.remove('popup__input-warning_active');
        });
        const inputWarnings = this._popupContainer.querySelectorAll('.popup__input_condition_warning');
        inputWarnings.forEach(element => {
            element.classList.remove('popup__input_condition_warning');
        });
    }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {this._submitFormHandler(evt, this._getInputValues())});
    }

    close() {
        super.close();
        //this.clearWarnings();
        this._form.reset();
    }
}
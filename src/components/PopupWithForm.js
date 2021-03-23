import Popup from './popup.js';

export default class PopupWithForm extends Popup {

    constructor (popupSelector, submitFormHandler) {
        super(popupSelector);
        this._popupContainer = document.querySelector(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._popupContainer.querySelector('.popup__form');
    }

    _getInputValues() {
        const formElements = document.querySelector('.popup__form').elements;
        const formValues = {};
        for (let i = 0; i < formElements.length; i++) {
        //    if ( formElements[i].nodeName === "INPUT") {
                formValues[formElements[i].name] = formElements[i].value;
            }
        //}
        console.log(formValues);
        return formElements;
    }

    _clearWarnings() {
        const warnings = this._popupContainer.querySelectorAll('.popup__input-warning_active');
        if (warnings === !null) {
        warnings.forEach(element => {
            element.classList.remove('popup__input-warning_active');
        });
        const inputWarnings = this._popupContainer.querySelectorAll('.popup__input_condition_warning');
        inputWarnings.forEach(element => {
            element.classList.remove('popup__input_condition_warning');
        });
        this._popupContainer.querySelector('.popup__submit-btn_condition_inactive').classList.remove('popup__submit-btn_condition_inactive');
    }
    }

    setEventListeners() {
        super.setEventListeners();
        //this._form.addEventListener('submit', this._getInputValues());
        this._form.addEventListener('submit', {handleEvent: this._submitFormHandler, formValues: this._getInputValues()});
    }

    close() {
        this._getInputValues();
        super.close();
        this._clearWarnings();
        this._form.reset();
    }
}
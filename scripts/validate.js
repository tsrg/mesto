export class FormValidator {

  constructor(validationSettings, form) {
    this._validationSettings = validationSettings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._validationSettings.inputSelector));
    this._buttonElement = this._form.querySelector(this._validationSettings.submitButtonSelector);
    this._errorElement
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._form.querySelector(`.popup__input-warning_type_${inputElement.name}`);
    inputElement.classList.add(this._validationSettings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._validationSettings.errorClass);
    this._toggleButtonState();
};

  _hideInputError(inputElement) {
    this._errorElement = this._form.querySelector(`.popup__input-warning_type_${inputElement.name}`);
    inputElement.classList.remove(this._validationSettings.inputErrorClass);
    this._errorElement.classList.remove(this._validationSettings.errorClass);
    this._errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
};

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._validationSettings.inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._validationSettings.inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
}


  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
      });
    });

  };


  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
    };
}


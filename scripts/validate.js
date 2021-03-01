export class Validate {

  constructor(settings) {

  }

  _showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.popup__input-warning_type_${inputElement.name}`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
    toggleButtonState
};

  _hideInputError(formElement, inputElement, settings) {
    const errorElement = formElement.querySelector(`.popup__input-warning_type_${inputElement.name}`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(formElement, inputElement, settings) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
};

  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  _toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        } else {
          buttonElement.classList.remove(settings.inactiveButtonClass);
        }
}


  _setEventListeners(formElement, settings) {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });

    toggleButtonState(inputList, buttonElement, settings);
  };


  _enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
      setEventListeners(formElement, settings);
    });
  }

  enableValidation(){
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_condition_inactive',
    inputErrorClass: 'popup__input_condition_warning',
    errorClass: 'popup__input-warning_active'
  });
}

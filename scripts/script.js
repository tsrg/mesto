let profileInfo = document.querySelector('.profile__info');
let formElement = document.querySelector('.popup');
let profileName = profileInfo.querySelector('.profile__title')
let popupDescr = formElement.querySelector('.popup__input_type_description');
let profileDescription = profileInfo.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__input_type_name');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = formElement.querySelector('.popup__close-btn')



function closePopup() {
  formElement.classList.remove('popup_opened');
}

function openPopup() {

  nameInput.value = profileName.innerHTML;
  popupDescr.value = profileDescription.innerHTML;
  formElement.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = popupDescr.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', closePopup);
editButton.addEventListener("click", openPopup);

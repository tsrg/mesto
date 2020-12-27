let profileInfo = document.querySelector('.profile__info');
let formElement = document.querySelector('.popup');
let profileName = profileInfo.querySelector('.profile__title')
let popupDescr = formElement.querySelector('.popup__input_type_description');
let profileDescription = profileInfo.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__input_type_name');
let editButton = document.querySelector('.profile__edit-button');



function closePopup() {
  formElement.classList.remove('popup_opened');
}

function openPopup() {
  console.log("www")
  formElement.classList.add('popup_opened');
  nameInput.value = profileName.innerHTML;
  popupDescr.value = profileDescription.innerHTML;
  formElement.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let jobInput = popupDescr;
    profileName.textContent = nameInput.value;
    profileInfo.querySelector('.profile__subtitle').textContent = jobInput.value;
    closePopup();
}

console.log(document.querySelector('.profile__edit-button'))
formElement.addEventListener('submit', handleFormSubmit);
formElement.querySelector('.popup__close-btn').addEventListener('click', closePopup);
document.querySelector('.profile__edit-button').addEventListener("click", openPopup);

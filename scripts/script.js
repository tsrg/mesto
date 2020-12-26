let profileInfo = document.querySelector('.profile__info');
let formElement = document.querySelector('.popup');


function openPopup() {
  let profileName = profileInfo.querySelector('.profile__title').innerHTML;
  let profileDescription = profileInfo.querySelector('.profile__subtitle').innerHTML;
  let popupName = formElement.querySelector('.popup__input_type_name');
  let popupDescr = formElement.querySelector('.popup__input_type_description');
  popupName.value = profileName;
  popupDescr.value = profileDescription;

  formElement.classList.add('popup_opened');
}

function closePopup() {
  formElement.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popup__input_type_name');
    let jobInput = formElement.querySelector('.popup__input_type_description');
    profileInfo.querySelector('.profile__title').textContent = nameInput.value;
    profileInfo.querySelector('.profile__subtitle').textContent = jobInput.value;
    formElement.classList.remove('popup_opened');
}


formElement.addEventListener('submit', handleFormSubmit);

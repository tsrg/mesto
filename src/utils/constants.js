export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const cards = document.querySelector('.elements');
export const cardsTempalte = document.querySelector('#cards-tempalte').content;
export const imgPopUp = document.querySelector('.popup_type_img-popup');
export const profileInfo = document.querySelector('.profile__info');
export const authorPopUp = document.querySelector('.popup_type_author');
export const profileName = profileInfo.querySelector('.profile__title')
export const popupDescr = authorPopUp.querySelector('.popup__input_type_description');
export const profileDescription = profileInfo.querySelector('.profile__subtitle');
export const nameInput = authorPopUp.querySelector('.popup__input_type_name');
export const editButton = document.querySelector('.profile__edit-button');
export const closeButton = authorPopUp.querySelector('.popup__close-btn');
export const fromAddPlace = document.querySelector('.popup_type_add-place');
export const placeAddButton = document.querySelector('.profile__add-button');
export const placeSbmtButton = fromAddPlace.querySelector('.popup__submit-btn');
export const placeAddCloseButton = fromAddPlace.querySelector('.popup__close-btn');
export const imgTitle = imgPopUp.querySelector('.popup__img-title');
export const picture = imgPopUp.querySelector('.popup__picture');
export const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
export const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
export const popupOverlays = document.querySelectorAll('.popup__overlay');

//validation
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_condition_inactive',
  inputErrorClass: 'popup__input_condition_warning',
  errorClass: 'popup__input-warning_active'
};
export const formAuthor = authorPopUp.querySelector('.popup__form_type_author');
export const formAddPlace = fromAddPlace.querySelector('.popup__form_type_add-place');

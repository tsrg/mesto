import {nameInput, profileName, popupDescr, profileDescription, authorPopUp, fromAddPlace, placeName, placePhoto, cards, placeSbmtButton, validationSettings} from './utils/constants.js';
import {Card} from './components/card.js'
import {addCard} from './index.js'

export function openPopUp (popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', checkKey);
  popUp.querySelector('.popup__close-btn').addEventListener('click', function () {
    closePopUp(popUp);
  });
  }

export function closePopUp (popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkKey);
  popUp.querySelector('.popup__close-btn').removeEventListener('click', function () {
    closePopUp(popUp);
  });
}

export function checkKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}

export function overlayClick(evt) {
  closePopUp(evt.target.parentElement);
}

export function openPopupAuthor() {
  nameInput.value = profileName.textContent;
  popupDescr.value = profileDescription.textContent;
  openPopUp(authorPopUp);
}

export function openAddPlace() {
  placeSbmtButton.disabled = true;
  placeSbmtButton.classList.add(validationSettings.inactiveButtonClass);
  openPopUp(fromAddPlace);
}

export function addPlaceFormSubmit (evt) {
  evt.preventDefault();
  const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
  const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
  const item = {};
  item.name = placeName;
  item.link = placePhoto;
  const newCard = new Card(item, '#cards-tempalte');
  addCard(cards, newCard.createCard());
  fromAddPlace.querySelector('.popup__form').reset();
  closePopUp(fromAddPlace);
  return newCard;
}

export function submitAuthorForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = popupDescr.value;
  closePopUp(authorPopUp);
}

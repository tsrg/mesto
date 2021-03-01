import {nameInput, profileName, popupDescr, profileDescription, authorPopUp, fromAddPlace, placeName, placePhoto, cards} from './constants.js';
import {Card, addCard} from './card.js'

export function openPopUp (popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', checkKey);
  console.log(popUp);
  popUp.querySelector('.button_type_close-pop-up').addEventListener('click', function () {
    closePopUp(popUp);
  });
  }

export function closePopUp (popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkKey);
  popUp.querySelector('.button_type_close-pop-up').removeEventListener('click', function () {
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
  openPopUp(fromAddPlace);
}

export function addPlaceFormSubmit (evt) {
  evt.preventDefault();
  const item = {};
  item.name = placeName;
  item.link = placePhoto;
  const newCard = new Card(item, '#cards-tempalte');
  addCard(cards, newCard.createCard());
  fromAddPlace.querySelector('.popup__form').reset();
  closePopUp(fromAddPlace);
  return newCard;
}

export function authorFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = popupDescr.value;
  closePopUp(authorPopUp);
}

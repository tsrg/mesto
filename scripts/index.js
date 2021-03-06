import {Card, addCard} from './card.js';
import {initialCards, cards, popupOverlays, editButton, placeAddButton, fromAddPlace, authorPopUp, validationSettings, formAuthor, formAddPlace} from './constants.js';
import {overlayClick, openPopupAuthor, openAddPlace, addPlaceFormSubmit, authorFormSubmit} from './popup.js';
import {FormValidator} from './validate.js';

popupOverlays.forEach((popupOverlay) => {
  popupOverlay.addEventListener('click', overlayClick);
});

editButton.addEventListener('click', openPopupAuthor);
placeAddButton.addEventListener('click', openAddPlace);
fromAddPlace.addEventListener('submit', addPlaceFormSubmit);
authorPopUp.addEventListener('submit', authorFormSubmit);


        initialCards.forEach((item) => {
          const card = new Card(item, '#cards-tempalte');
          addCard(cards, card.createCard());

        });


//validate
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();

const validateFormAddPlace = new FormValidator(validationSettings, formAddPlace);
validateFormAddPlace.enableValidation();
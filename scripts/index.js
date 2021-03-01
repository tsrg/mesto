import {Card, addCard} from './card.js';
import {initialCards, cards, popupOverlays, editButton, placeAddButton, fromAddPlace, authorPopUp} from './constants.js';
import {overlayClick, openPopupAuthor, openAddPlace, addPlaceFormSubmit, authorFormSubmit} from './popup.js';

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





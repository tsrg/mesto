import {Card} from '../components/card.js';
import {initialCards, cards, popupOverlays, editButton, placeAddButton, fromAddPlace, authorPopUp, validationSettings, formAuthor, formAddPlace} from '../utils/constants.js';
import {overlayClick, openPopupAuthor, openAddPlace, addPlaceFormSubmit, submitAuthorForm} from '../popup.js';
import {FormValidator} from '../components/validate.js';




export function addCard (container, cardElement) {
  container.prepend(cardElement);
}


popupOverlays.forEach((popupOverlay) => {
  popupOverlay.addEventListener('click', overlayClick);
});

editButton.addEventListener('click', openPopupAuthor);
placeAddButton.addEventListener('click', openAddPlace);
fromAddPlace.addEventListener('submit', addPlaceFormSubmit);
authorPopUp.addEventListener('submit', submitAuthorForm);


        initialCards.forEach((item) => {
          const card = new Card(item, '#cards-tempalte');
          addCard(cards, card.createCard());

        });


//validate
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();

const validateFormAddPlace = new FormValidator(validationSettings, formAddPlace);
validateFormAddPlace.enableValidation();
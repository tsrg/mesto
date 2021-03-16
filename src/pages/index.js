import './index.css';
import {initialCards, cards, popupOverlays, editButton, placeAddButton, fromAddPlace, authorPopUp, validationSettings, formAuthor, formAddPlace} from '../utils/constants.js';
import Card from '../components/card.js';
import Section from '../components/section.js';

const initCards = new Section(cards, {
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#cards-tempalte');
        const cardElement = card.createCard();
        initCards.addItem(cardElement);
        }
    }
);

console.log(cards);
initCards.renderItems();
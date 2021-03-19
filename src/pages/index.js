import './index.css';
import {initialCards, cards, popupOverlays, editButton, placeAddButton, fromAddPlace, authorPopUp, validationSettings, formAuthor, formAddPlace} from '../utils/constants.js';
import Card from '../components/card.js';
import Section from '../components/section.js';
import PopUp from '../components/popup.js';
import PopupWithImage from '../components/popupwithimage.js';

const imgPopUp = new PopupWithImage('.popup_type_img-popup');

const initCards = new Section(cards, {
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#cards-tempalte', imgPopUp);
        const cardElement = card.createCard();
        initCards.addItem(cardElement);
        }
    }
);

initCards.renderItems();
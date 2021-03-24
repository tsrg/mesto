import './index.css';
import {initialCards, cards, editButton,
        placeAddButton, authorPopUp, validationSettings,
        formAuthor, formAddPlace, userSelectors, nameInput, popupDescr,
        placeSbmtButton, authorPopUpSelector, nameInputSelector,
        descriptionInputSelector, addPlacePopUpSelector, placeNameInputSelector,
        placePhotoInputSelector, placeName, placePhoto, cardsTempalteSelector, imgPopUpSelector} from '../utils/constants.js';
import Card from '../components/card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopUpWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

function createCard(item) {
    const card = new Card(item, cardsTempalteSelector, imgPopUp.open.bind(imgPopUp));
    return card;
}

//------ *начальный контент* ----------
const initCards = new Section(cards, {
    data: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.createCard();
        initCards.addItem(cardElement);
        }
    }
);

const user = new UserInfo(userSelectors);

//-------------------*PopUp редактирование автора------------------------
const authPopUp = new PopupWithForm(authorPopUpSelector, function (evt, inputValues) {
    evt.preventDefault();
    authPopUp.close();
    user.setUserInfo(inputValues.authorName, inputValues.athorDescription);
});

//-------------------*popUp добавить место*------------------------------
const addPopUp = new PopupWithForm(addPlacePopUpSelector, (evt) => {
    evt.preventDefault();
    const item = {};
    item.name = placeName;
    item.link = placePhoto;
    const newCard = createCard(item);
    const newCardElement = newCard.createCard();
    initCards.addItem(newCardElement);
    addPopUp.close();
});

//------------------------*popUp картинки*--------------------------
const imgPopUp = new PopupWithImage(imgPopUpSelector);

//------------------------*слушатели событий*-----------------------------------------------------------------
editButton.addEventListener('click', () => {
    nameInput.value = user.getUserInfo().name;
    popupDescr.value = user.getUserInfo().info;
    authPopUp.clearWarnings();
    authPopUp.open();
});       //--откр. popUp инф.пользователя--
placeAddButton.addEventListener('click', () => {
    placeSbmtButton.disabled = true;
    placeSbmtButton.classList.add(validationSettings.inactiveButtonClass);
    addPopUp.open();
    addPopUp.clearWarnings();
});     //--откр. popUp добавить место----

authPopUp.setEventListeners();
imgPopUp.setEventListeners();
addPopUp.setEventListeners();

//-------*Отрисовка начального контента*------
initCards.renderItems();

//--------------*Валидация форм*--------------------------------------------------
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();
const validateFormAddPlace = new FormValidator(validationSettings, formAddPlace);
validateFormAddPlace.enableValidation();
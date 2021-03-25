import './index.css';
import {initialCards, cards, editButton,
        placeAddButton, authorPopUp, validationSettings,
        formAuthor, formAddPlace, userSelectors, nameInput, popupDescr,
        placeSbmtButton, authorPopUpSelector, nameInputSelector,
        descriptionInputSelector, addPlacePopUpSelector, placeNameInputSelector,
        placePhotoInputSelector, cardsTempalteSelector, imgPopUpSelector} from '../utils/constants.js';
import Card from '../components/Card.js';
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
const placeName = formAddPlace.querySelector('.popup__input_type_place-name').value;
const placePhoto = formAddPlace.querySelector('.popup__input_type_photo');
const addPopUp = new PopupWithForm(addPlacePopUpSelector, (evt) => {
    evt.preventDefault();
    const item = {};
    item.name = formAddPlace.querySelector('.popup__input_type_place-name').value;
    item.link = formAddPlace.querySelector('.popup__input_type_photo').value;
    const newCard = createCard(item);
    const newCardElement = newCard.createCard();
    initCards.addItem(newCardElement);
    addPopUp.close();
});

//------------------------*popUp картинки*--------------------------
const imgPopUp = new PopupWithImage(imgPopUpSelector);

//--------------*Валидация форм*--------------------------------------------------
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();
const validateFormAddPlace = new FormValidator(validationSettings, formAddPlace);
validateFormAddPlace.enableValidation();

//------------------------*слушатели событий*-----------------------------------------------------------------
editButton.addEventListener('click', () => {
    nameInput.value = user.getUserInfo().name;
    popupDescr.value = user.getUserInfo().info;
    validateFormAuthor.clearWarnings();
    authPopUp.open();
});       //--откр. popUp инф.пользователя--
placeAddButton.addEventListener('click', () => {
    placeSbmtButton.disabled = true;
    placeSbmtButton.classList.add(validationSettings.inactiveButtonClass);
    addPopUp.open();
    validateFormAddPlace.clearWarnings();
});     //--откр. popUp добавить место----

authPopUp.setEventListeners();
imgPopUp.setEventListeners();
addPopUp.setEventListeners();

//-------*Отрисовка начального контента*------
initCards.renderItems();
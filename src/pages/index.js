import './index.css';
import {initialCards, cards, editButton,
        placeAddButton, authorPopUp, validationSettings,
        formAuthor, formAddPlace, userSelectors, nameInput, popupDescr,
        placeSbmtButton, authorPopUpSelector, nameInputSelector,
        descriptionInputSelector, addPlacePopUpSelector, placeNameInputSelector,
        placePhotoInputSelector, placeName, placePhoto} from '../utils/constants.js';
import Card from '../components/card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopUpWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

function createCard(item) {
    const card = new Card(item, '#cards-tempalte', imgPopUp.open.bind(imgPopUp));
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

//------------------------------------


const user = new UserInfo(userSelectors);

//-------------------*PopUp редактирование автора------------------------
const authPopUp = new PopupWithForm(authorPopUpSelector, function (evt) {
    evt.preventDefault();
    console.log(this.formValues);
    authPopUp.close();
    
    const userName = authorPopUp.querySelector(nameInputSelector).value;
    const info = authorPopUp.querySelector(descriptionInputSelector).value;
    user.setUserInfo(userName, info);
    
});

//-----------------------------------------------------------------------


//-------------------*popUp добавить место*------------------------------
const addPopUp = new PopupWithForm(addPlacePopUpSelector, (evt) => {
    //evt.preventDefault();
    const item = {};
    item.name = placeName;
    item.link = placePhoto;
    const newCard = createCard(item);
    const newCardElement = newCard.createCard();
    initCards.addItem(newCardElement);
    addPopUp.close();
});

//--------------------------------------------------------------------------



//------------------------*popUp картинки*--------------------------
const imgPopUp = new PopupWithImage('.popup_type_img-popup');
//------------------------------------------------------------------


//------------------------*слушатели событий*-----------------------------------------------------------------
editButton.addEventListener('click', () => {
    nameInput.value = user.getUserInfo().name;
    popupDescr.value = user.getUserInfo().info;
    authPopUp.open();
});       //--откр. popUp инф.пользователя--
placeAddButton.addEventListener('click', () => {

    placeSbmtButton.disabled = true;
    placeSbmtButton.classList.add(validationSettings.inactiveButtonClass);
    addPopUp.open();
});     //--откр. popUp добавить место----


authPopUp.setEventListeners();
imgPopUp.setEventListeners();
addPopUp.setEventListeners();
//-------------------------------------------------------------------------------------

//-------*Отрисовка начального контента*------
initCards.renderItems();
//--------------------------------------------




//--------------*Валидация форм*--------------------------------------------------
const validateFormAuthor = new FormValidator(validationSettings, formAuthor);
validateFormAuthor.enableValidation();

const validateFormAddPlace = new FormValidator(validationSettings, formAddPlace);
validateFormAddPlace.enableValidation();
//--------------------------------------------------------------------------------
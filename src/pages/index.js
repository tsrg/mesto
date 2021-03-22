import './index.css';
import {initialCards, cards, popupOverlays, editButton,
        placeAddButton, fromAddPlace, authorPopUp, validationSettings, 
        formAuthor, formAddPlace, userSelectors, nameInput, popupDescr} from '../utils/constants.js';
import Card from '../components/card.js';
import Section from '../components/section.js';
import PopUp from '../components/popup.js';
import PopupWithImage from '../components/popupwithimage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/validate.js';
import UserInfo from '../components/userinfo.js';

//------ *начальный контент* ----------
const initCards = new Section(cards, {
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#cards-tempalte', imgPopUp.open.bind(imgPopUp));
        const cardElement = card.createCard();
        initCards.addItem(cardElement);
        }
    }
);

//------------------------------------


const user = new UserInfo(userSelectors);

//-------------------*PopUp редактирование автора------------------------
const authPopUp = new PopupWithForm('.popup_type_author', (evt) => {
    evt.preventDefault();
    const userName = authorPopUp.querySelector('.popup__input_type_name').value;
    const info = authorPopUp.querySelector('.popup__input_type_description').value;
    user.setUserInfo(userName, info);
    authPopUp.close();
});

//-----------------------------------------------------------------------


//-------------------*popUp добавить место*------------------------------
const addPopUp = new PopupWithForm('.popup_type_add-place', (evt) => {
    evt.preventDefault();
    const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
    const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
    const item = {};
    item.name = placeName;
    item.link = placePhoto;
    const newCard = new Card(item, '#cards-tempalte', imgPopUp.open.bind(imgPopUp));
    const newCardElement = newCard.createCard();
    initCards.addItem(newCardElement);
    //console.log(cardElement);
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
placeAddButton.addEventListener('click', addPopUp.open.bind(addPopUp));     //--откр. popUp добавить место----


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
//cards


const cardsTempalte = document.querySelector('#cards-tempalte').content;
const cards = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//initialContent
function createCard (name, link) {
  const card = cardsTempalte.cloneNode(true);
  const picture = card.querySelector('.element__picture');
  picture.src = link;
  picture.alt = name;
  card.querySelector('.element__title').textContent = name;
  card.querySelector('.element__like-btn').addEventListener('click', likeButtonClick);
  card.querySelector('.element__remove-btn').addEventListener('click', removeButtonClick);
  picture.addEventListener('click', openImgPopUp);
  return card;
}

function addCard (container, cardElement) {
  container.prepend(cardElement);
}

initialCards.forEach((item) => {
  const elements = document.querySelector('.elements');
  addCard(elements, createCard(item.name, item.link));
});

//IMG popup
function openImgPopUp(evt) {
  const imgPopUp = document.querySelector('.img-popup');
  const imgLink = evt.target.src;
  const imgName = evt.target.alt;
  const picture = imgPopUp.querySelector('.img-popup__picture');
  picture.src = imgLink;
  picture.alt = imgName;
  imgPopUp.querySelector('.img-popup__title').textContent = imgName;
  imgPopUp.classList.toggle('popup_opened');
  imgPopUp.classList.toggle('popup_closed');
  imgPopUp.querySelector('.img-popup__close-btn').addEventListener('click', fadeImgPopUp);
}

function fadeImgPopUp(evt) {
  const imgPopUp = evt.target.parentNode.parentNode;

  imgPopUp.classList.add('popup_fadeout');
  imgPopUp.addEventListener('animationend', CloseImgPopup);
}

function closeImgPopup () {
  const imgPopUp = document.querySelector('.img-popup');
  imgPopUp.classList.toggle('popup_closed');
  imgPopUp.classList.toggle('popup_opened');
  imgPopUp.removeEventListener('animationend', CloseImgPopup);
  imgPopUp.classList.remove('popup_fadeout');
}


//pop-up author
const profileInfo = document.querySelector('.profile__info');
const formElement = document.querySelector('.popup_type_author');
const profileName = profileInfo.querySelector('.profile__title')
const popupDescr = formElement.querySelector('.popup__input_type_description');
const profileDescription = profileInfo.querySelector('.profile__subtitle');
const nameInput = formElement.querySelector('.popup__input_type_name');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = formElement.querySelector('.popup__close-btn');


function closePopupAuthor() {
  formElement.classList.toggle('popup_opened');
  formElement.classList.add('popup_fadeout');
  formElement.addEventListener('animationend', actClosePopup);
};

function actClosePopup () {
  formElement.classList.toggle('popup_closed');
  formElement.removeEventListener('animationend', actClosePopup);
  formElement.classList.remove('popup_fadeout');
}

function openPopupAuthor() {

  nameInput.value = profileName.textContent;
  popupDescr.value = profileDescription.textContent;
  formElement.classList.toggle('popup_opened');
  formElement.classList.toggle('popup_closed');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = popupDescr.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', closePopupAuthor);
editButton.addEventListener("click", openPopupAuthor);


//popup addPlace
let fromAddPlace = document.querySelector('.popup_type_add-place');
const placeAddButton = document.querySelector('.profile__add-button');
const placeAddCloseButton = fromAddPlace.querySelector('.popup__close-btn');

function fadePopupAddPlace() {
  
}

function openPopupAddPlace() {
  fromAddPlace.classList.toggle('popup_opened');
  fromAddPlace.classList.toggle('popup_closed');
}

function addPlaceFormSubmit (evt) {
  evt.preventDefault();
  fromAddPlace = document.querySelector('.popup_type_add-place');
  const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
  const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
  const newCard = createCard(placeName, placePhoto);
  fromAddPlace.querySelector('.popup__container').reset();
  closePopupAddPlace ();
}

function closePopupAddPlace () {
  fromAddPlace.classList.add('popup_fadeout');
  fromAddPlace.addEventListener('animationend', close);
  function close () {
    fromAddPlace.classList.toggle('popup_closed');
    fromAddPlace.classList.toggle('popup_opened');
    fromAddPlace.removeEventListener('animationend', close);
    fromAddPlace.classList.remove('popup_fadeout');
  };
}


fromAddPlace.addEventListener('submit', addPlaceFormSubmit);
placeAddCloseButton.addEventListener('click', fadePopupAddPlace);
placeAddButton.addEventListener("click", openPopupAddPlace);

//like
function likeButtonClick (evt) {
  evt.target.classList.toggle('element__like-btn_active');
}

//remove card
function removeButtonClick (evt) {
  evt.target.closest('.element').remove();
}


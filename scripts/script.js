//cards


const cardsTempalte = document.querySelector('#cards-tempalte').content;
const Cards = document.querySelector('.elements');
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

initialCards.forEach((item) => {
  createCard(item.name, item.link);
});




function createCard (name, link) {
  const card = cardsTempalte.cloneNode(true);
  card.querySelector('.element__picture').src = link;
  card.querySelector('.element__picture').alt = name;
  card.querySelector('.element__title').textContent = name;

  Cards.prepend(card);
}



//pop-up author
let profileInfo = document.querySelector('.profile__info');
let formElement = document.querySelector('.popup__type_author');
let profileName = profileInfo.querySelector('.profile__title')
let popupDescr = formElement.querySelector('.popup__input_type_description');
let profileDescription = profileInfo.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__input_type_name');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = formElement.querySelector('.popup__close-btn');



function closePopupAuthor() {
  formElement.classList.remove('popup_opened');
}

function openPopupAuthor() {

  nameInput.value = profileName.innerHTML;
  popupDescr.value = profileDescription.innerHTML;
  formElement.classList.add('popup_opened');
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

let fromAddPlace = document.querySelector('.popup__type_add-place');
let placeAddButton = document.querySelector('.profile__add-button');
let placeAddCloseButton = fromAddPlace.querySelector('.popup__close-btn');
//let placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
//let placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;

function closePopupAddPlace() {
  fromAddPlace.classList.remove('popup_opened');
}

function openPopupAddPlace() {

  fromAddPlace.classList.add('popup_opened');
}

function addPlaceFormSubmit (evt) {
    evt.preventDefault();
    fromAddPlace = document.querySelector('.popup__type_add-place');
    const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
    const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
    createCard(placeName, placePhoto);
    closePopupAddPlace();
}

fromAddPlace.addEventListener('submit', addPlaceFormSubmit);
placeAddCloseButton.addEventListener('click', closePopupAddPlace);
placeAddButton.addEventListener("click", openPopupAddPlace);
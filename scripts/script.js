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

const elements = document.querySelector('.elements');
const imgPopUp = document.querySelector('.img-popup');
const profileInfo = document.querySelector('.profile__info');
const authorPopUp = document.querySelector('.popup_type_author');
const profileName = profileInfo.querySelector('.profile__title')
const popupDescr = authorPopUp.querySelector('.popup__input_type_description');
const profileDescription = profileInfo.querySelector('.profile__subtitle');
const nameInput = authorPopUp.querySelector('.popup__input_type_name');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = authorPopUp.querySelector('.popup__close-btn');
let fromAddPlace = document.querySelector('.popup_type_add-place');
const placeAddButton = document.querySelector('.profile__add-button');
const placeAddCloseButton = fromAddPlace.querySelector('.popup__close-btn');


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
  addCard(elements, createCard(item.name, item.link));
});

// PopUp
function openPopUp (popUp) {
  popUp.classList.add('popup_opened');
}

function closePopUp (popUp) {
  popUp.classList.remove('popup_opened');
}

//IMG popup
function openImgPopUp(evt) {
  const imgName = evt.target.alt;
  const picture = imgPopUp.querySelector('.img-popup__picture');
  picture.src = evt.target.src;
  picture.alt = imgName;
  imgPopUp.querySelector('.img-popup__title').textContent = imgName;
  openPopUp(imgPopUp);
}

imgPopUp.querySelector('.img-popup__close-btn').addEventListener('click', function () {
  closePopUp(imgPopUp);
});

//pop-up author
function openPopupAuthor() {
  nameInput.value = profileName.textContent;
  popupDescr.value = profileDescription.textContent;
  openPopUp(authorPopUp);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = popupDescr.value;
    closePopUp(authorPopUp);
}

authorPopUp.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', function () {
  closePopUp(authorPopUp);
});
editButton.addEventListener('click', openPopupAuthor);

//popup addPlace
function addPlaceFormSubmit (evt) {
  evt.preventDefault();
  const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
  const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;
  const newCard = createCard(placeName, placePhoto);
  fromAddPlace.querySelector('.popup__container').reset();
  addCard(elements, newCard);
  closePopUp(fromAddPlace);
  return newCard;
}

fromAddPlace.addEventListener('submit', addPlaceFormSubmit);
placeAddCloseButton.addEventListener('click', function () {
  closePopUp(fromAddPlace);
});
placeAddButton.addEventListener('click', function () {
  openPopUp(fromAddPlace);
});

//like
function likeButtonClick (evt) {
  evt.target.classList.toggle('element__like-btn_active');
}

//remove card
function removeButtonClick (evt) {
  evt.target.closest('.element').remove();
}

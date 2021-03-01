//cards
const cardsTempalte = document.querySelector('#cards-tempalte').content;
const cards = document.querySelector('.elements');

const imgPopUp = document.querySelector('.img-popup');
const profileInfo = document.querySelector('.profile__info');
const authorPopUp = document.querySelector('.popup_type_author');
const profileName = profileInfo.querySelector('.profile__title')
const popupDescr = authorPopUp.querySelector('.popup__input_type_description');
const profileDescription = profileInfo.querySelector('.profile__subtitle');
const nameInput = authorPopUp.querySelector('.popup__input_type_name');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = authorPopUp.querySelector('.popup__close-btn');
const fromAddPlace = document.querySelector('.popup_type_add-place');
const placeAddButton = document.querySelector('.profile__add-button');
const placeAddCloseButton = fromAddPlace.querySelector('.popup__close-btn');
const picture = imgPopUp.querySelector('.img-popup__picture');
const imgTitle = imgPopUp.querySelector('.img-popup__title');
const placeName = fromAddPlace.querySelector('.popup__input_type_place-name').value;
const placePhoto = fromAddPlace.querySelector('.popup__input_type_photo').value;

const popupOverlays = document.querySelectorAll('.popup__overlay');







//pop-up author


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = popupDescr.value;
    closePopUp(authorPopUp);
}

authorPopUp.addEventListener('submit', handleFormSubmit);



//popup addPlace
function addPlaceFormSubmit (evt) {
  evt.preventDefault();
  const newCard = createCard(placeName, placePhoto);
  fromAddPlace.querySelector('.popup__form').reset();
  addCard(cards, newCard);
  closePopUp(fromAddPlace);
  return newCard;
}


placeAddCloseButton.addEventListener('click', function () {
  closePopUp(fromAddPlace);
});























//initialContent
function createCard (name, link) {
  const card = document.querySelector('#cards-tempalte').content.cloneNode(true);
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
  addCard(cards, createCard(item.name, item.link));
});


//like
function likeButtonClick (evt) {
  evt.target.classList.toggle('element__like-btn_active');
}

//remove card
function removeButtonClick (evt) {
  evt.target.closest('.element').remove();
}






function openPopUp (popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', checkKey);
}

function overlayClick(evt) {
  closePopUp(evt.target.parentElement);
}

popupOverlays.forEach((popupOverlay) => {
  popupOverlay.addEventListener('click', overlayClick);
});

function closePopUp (popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkKey);
}

//IMG popup
function openImgPopUp(evt) {
  const imgName = evt.target.alt;
  picture.src = evt.target.src;
  picture.alt = imgName;
  imgTitle.textContent = imgName;
  openPopUp(imgPopUp);
}




// PopUp
function checkKey(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
}




closeButton.addEventListener('click', function () {
  closePopUp(authorPopUp);
});

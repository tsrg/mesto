const todir = document.querySelector('.header__toboss-btn');
let popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-btn');

todir.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);

function openPopUp () {
    popup.classList.toggle('.popup_opened');
}

function closePopUp () {
    popup.classList.toggle('.popup_opened');
}
export default class Card {

  constructor(data, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

  }

  _getTempalte() {
    const cardElemet = document.querySelector('#cards-tempalte').content.cloneNode(true);

    return cardElemet
  }

  _likeButtonClick (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  }

  _removeButtonClick (evt) {
    evt.target.closest('.element').remove();
  }

  createCard() {
    const card = this._getTempalte();
    const picture = card.querySelector('.element__picture');
    picture.src = this._link;
    picture.alt = this._name;
    card.querySelector('.element__title').textContent = this._name;

    card.querySelector('.element__like-btn').addEventListener('click', this._likeButtonClick);
    card.querySelector('.element__remove-btn').addEventListener('click', this._removeButtonClick);
    picture.addEventListener('click', this._handleCardClick);

    return card;
  }
}

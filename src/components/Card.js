export default class Card {

  constructor(data, cardSelector, handleCardClick, handleRemoveBtnClick, handleLikeBtnClick, userId) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this.owner_id = data.owner._id;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleRemoveBtnClick = handleRemoveBtnClick;
    this._handleLikeBtnClick = handleLikeBtnClick;
    this._userId = userId;
  }

  _getTemplate() {
    const cardElemet = document.querySelector(this._cardSelector).content.cloneNode(true);

    return cardElemet
  }

  _likeButtonClick () {
    //evt.target.classList.toggle('element__like-btn_active');
    this._handleRemoveBtnClick(this.card);
  }

  _removeButtonClick () {
    this._handleRemoveBtnClick(this.card);
  }

  _setEventListeners(card, picture, removeBtn) {
    card.querySelector('.element__like-btn').addEventListener('click', this._handleLikeBtnClick);
    picture.addEventListener('click', this._handleCardClick);
    if (!(removeBtn === null)) {
    removeBtn.addEventListener('click', this._handleRemoveBtnClick);
    }
  }

  createCard() {
    const card = this._getTemplate();
    const picture = card.querySelector('.element__picture');
    const removeBtn = card.querySelector('.element__remove-btn');
    picture.src = this._link;
    picture.alt = this._name;
    card.querySelector('.element').id = this._id;
    card.querySelector('.element__title').textContent = this._name;
    card.querySelector('.element__like-counter').textContent = this._likes.length;
    this._likes.forEach(element => {
      if (element._id === this._userId) {
        card.querySelector('.element__like-btn').classList.add('element__like-btn_active')
      };
    });
    if (!(this.owner_id === this._userId)) {
      removeBtn.remove();
    }

    this._setEventListeners(card, picture, removeBtn);


    return card;
  }
}

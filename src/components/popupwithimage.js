import Popup from './popup.js';
export default class PopupWithImage extends Popup {

    open(evt) {
        const imgName = evt.target.alt;
        this._popupContainer.querySelector('.popup__picture').src = evt.target.src;
        this._popupContainer.querySelector('.popup__picture').alt = imgName;
        this._popupContainer.querySelector('.popup__img-title').textContent = imgName;
        super.open();
    }
}

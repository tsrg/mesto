import Popup from './PopUp.js';
export default class PopupWithImage extends Popup {

    open(evt) {
        const imgName = evt.target.alt;
        const picture = this._popupContainer.querySelector('.popup__picture')
        picture.src = evt.target.src;
        picture.alt = imgName;
        this._popupContainer.querySelector('.popup__img-title').textContent = imgName;
        super.open();
    }
}

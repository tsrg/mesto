import Popup from '../components/popup.js';
import {picture, imgTitle} from '../utils/constants.js';

export default class PopupWithImage extends Popup {

    open(evt) {
        const imgName = evt.target.alt;
        picture.src = evt.target.src;
        picture.alt = imgName;
        imgTitle.textContent = imgName;
        //this._popupContainer = document.querySelector(selector);
        super.open();
        //this._popupContainer = document.querySelector('.popup_type_img-popup');
        //console.log(this._popupContainer);
        //console.log(super._popupContainer);
        //super._popupContainer.classList.add('popup_opened');
    }
}
import Popup from './popup.js';
import {picture, imgTitle} from './constants.js';

export class PopupWithImage extends Popup {

    open(evt) {
        const imgName = evt.target.alt;
        picture.src = evt.target.src;
        picture.alt = imgName;
        imgTitle.textContent = imgName;
        this._popupContainer.classList.add('popup_opened');
    }
}
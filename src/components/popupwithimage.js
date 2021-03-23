import Popup from './popup.js';
import {picture, imgTitle} from '../utils/constants.js';

export default class PopupWithImage extends Popup {

    open(evt) {
        const imgName = evt.target.alt;
        picture.src = evt.target.src;
        picture.alt = imgName;
        imgTitle.textContent = imgName;
        super.open();
    }
}
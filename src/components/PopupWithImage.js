import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
	constructor(popupSelector, imagePopup, imageCaption) {
		super(popupSelector);
		this._popup = document.querySelector(popupSelector);
		this._imagePopup = imagePopup;
		this._imageCaption = imageCaption;
	}
	open(data) {
		this._imagePopup.src = data.link
		this._imageCaption.textContent = data.name
		this._imagePopup.alt = data.name
		super.open()
	}
}
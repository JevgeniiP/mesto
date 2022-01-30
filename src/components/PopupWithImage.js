import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
	open(data) {
		this._imagePopup = this._popupSelector.querySelector('.popup__photo');
		this._imageCaption = this._popupSelector.querySelector('.popup__caption');

		this._imagePopup.src = data.link
		this._imageCaption.textContent = data.name
		this._imagePopup.alt = data.name
		super.open()
	}
}
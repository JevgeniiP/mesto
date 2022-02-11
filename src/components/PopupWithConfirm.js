import { Popup } from "../components/Popup.js";

export class PopupWithConfirm extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._elementDeleteButton = this._popupSelector.querySelector('.popup__save_type_confirm');
	}

	_deleteConfirm = (ev) => {
		ev.preventDefault();
		this._handleDelete();
	}

	open(confirm) {
		this._handleDelete = confirm;
		super.open();

	}

	setEventListeners() {
		super.setEventListeners();
		this._elementDeleteButton.addEventListener('click', this._deleteConfirm);
	}


}
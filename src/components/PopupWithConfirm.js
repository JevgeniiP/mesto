import { Popup } from "../components/Popup.js";

export class PopupWithConfirm extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._elementDeleteButton = this._popupSelector.querySelector('.popup__save');
		this._elementDeleteButtonInnertext = this._elementDeleteButton.textContent;
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

	renderLoading(isLoading) {

		this._elementDeleteButton.textContent = isLoading ? 'Сохранение...' : this._elementDeleteButtonInnertext;
	}
}

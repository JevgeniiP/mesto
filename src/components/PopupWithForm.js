import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
	constructor(popupSelector, submitFormCallback) {
		super(popupSelector);
		this._popup = document.querySelector(popupSelector);
		this._submitFormCallback = submitFormCallback;
		this._inputs = [...this._popup.querySelectorAll('.popup__input')];
		this._popupForm = this._popup.querySelector('.popup__form');
		this._popupProfileSaveButton = this._popup.querySelector('.popup__save');
		this._popupProfileSaveButtonInner = this._popupProfileSaveButton.textContent;
	}

	_getInputValues() {
		const allInputs = {};
		this._inputs.map((input) => {
			allInputs[input.name] = input.value;
		})
		return allInputs;
	}
	close() {
		super.close();
		this._popupForm.reset();
	}
	setEventListeners() {
		super.setEventListeners();
		this._popup.addEventListener('submit', (event) => {
			event.preventDefault();
			this._submitFormCallback(this._getInputValues());
		});
	}
	renderLoading(isLoading) {
		this._popupProfileSaveButton.textContent = isLoading ? 'Сохранение...' : this._popupProfileSaveButtonInner;
	}
}
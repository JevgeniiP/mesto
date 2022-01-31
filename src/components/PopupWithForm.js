import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
	constructor(popupSelector, submitFormCallback) {
		super(popupSelector);
		this._submitFormCallback = submitFormCallback;
		this._inputs = [...this._popupSelector.querySelectorAll('.popup__input')];
	}

	_getInputValues() {
		const allInputs = {};
		this._inputs.map((input) => {
			allInputs[input.name] = input.value;
		})
		return allInputs;
	}
	setEventListeners() {
		super.setEventListeners();
		this._popupSelector.addEventListener('submit', (event) => {
			event.preventDefault();
			this._submitFormCallback(this._getInputValues());
			this.close();
		});
	}
}
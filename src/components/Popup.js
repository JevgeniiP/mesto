export class Popup {
	constructor(popupSelector) {
		this._popupSelector = popupSelector;
		//this._handleEscClose = this._handleEscClose.bind(this)
	}

	open() {
		this._popupSelector.classList.add('popup_is-open');
		document.addEventListener('keydown', (event) => this._handleEscClose(event));
	}

	close() {
		this._popupSelector.classList.remove('popup_is-open');
		document.removeEventListener('keydown', this._handleEscClose.bind());
	}

	_handleEscClose(event) {
		if (event.key === 'Escape') {
			this.close();
		}
	}

	setEventListeners() {
		this._popupSelector.addEventListener('click', (event) => {
			if (event.target.classList.contains('popup_is-open')) {
				this.close();
			}
			if (event.target.classList.contains('popup__close')) {
				this.close();
			}
		})

	}
}

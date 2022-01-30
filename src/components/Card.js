export class Card {
	constructor(data, templateElement, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._templateElement = templateElement
		this._popupFullScreen = document.querySelector('.popup_type_fullscreen');
		this._imageCard = this._popupFullScreen.querySelector('.card__photo');
		this._imageCaption = this._popupFullScreen.querySelector('.popup__caption');
		this._handleCardClick = handleCardClick;
	}


	_getTemplate() {
		return document.querySelector(this._templateElement).content.querySelector('.card').cloneNode(true);
	}

	generateCard() {
		this._templates = this._getTemplate()
		this._cardPhotoElement = this._templates.querySelector('.card__photo');
		this._cardPhotoElement.src = this._link;
		this._cardPhotoElement.alt = this._name;
		this._templates.querySelector('.card__title').textContent = this._name;
		this._setEventListeners();
		return this._templates;
	}

	_likeHandler(event) {
		event.target.classList.toggle('like-button_active');
	}

	_cardDeleteHandler() {
		this._templates.remove();
		this._templates = null;
	}
	_setEventListeners() {
		this._templates.querySelector('.like-button').addEventListener('click', (event) => {
			this._likeHandler(event);
		})
		this._templates.querySelector('.card__button-delete').addEventListener('click', (event) => {
			this._cardDeleteHandler(event);
		})
		this._cardPhotoElement.addEventListener('click', () => { this._handleCardClick() })
	}

};

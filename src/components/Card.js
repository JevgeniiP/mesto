export class Card {
	constructor({ data, templateElement, id, deleteCardHandler, handleCardClick }) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._idOwnerCard = data.owner._id;
		this._id = data._id;
		this._idUser = id;
		this._templateElement = templateElement;
		this._handleCardClick = handleCardClick;
		this._deleteCardHandler = deleteCardHandler;

		this._popupFullScreen = document.querySelector('.popup_type_fullscreen');
		this._imageCard = this._popupFullScreen.querySelector('.card__photo');
		this._imageCaption = this._popupFullScreen.querySelector('.popup__caption');

		this._templates = this._getTemplate()
		this._cardPhotoElement = this._templates.querySelector('.card__photo');
		this._cardLikes = this._templates.querySelector('.card__like-counter');
		this._cardTitle = this._templates.querySelector('.card__title');

	}


	_getTemplate() {
		return document.querySelector(this._templateElement).content.querySelector('.card').cloneNode(true);
	}

	_basketHandler() {
		if (this._idOwnerCard !== this._idUser) {
			this._templates.querySelector('.card__button-delete').setAttribute('disabled', 'disabled');
			this._templates.querySelector('.card__button-delete').style = 'visibility:hidden';
		}

	}

	generateCard() {
		this._cardPhotoElement.src = this._link;
		this._cardPhotoElement.alt = this._name;
		this._cardTitle.textContent = this._name;
		this._setEventListeners();
		this._basketHandler();
		this._cardLikes.textContent = this._likes.length;
		return this._templates;

	}

	//_likeHandler(event) {
	//	event.target.classList.toggle('like-button_active');
	//}
	getId() {
		return this._id;
	}
	_clearTemplate() {
		this._templates.remove();
		this._templates = null;
	}



	_setEventListeners() {
		//	this._templates.querySelector('.like-button').addEventListener('click', (event) => {
		//		this._likeHandler(event);
		//	})
		this._templates.querySelector('.card__button-delete').addEventListener('click', () => {
			this._deleteCardHandler(this);
		})
		this._cardPhotoElement.addEventListener('click', () => { this._handleCardClick() })
	}

};

export class Card {
	constructor({ data, templateElement, sendLike, deleteLike, id, deleteCardHandler, handleCardClick }) {
		this._name = data.name;
		this._link = data.link;
		this._likes = data.likes;
		this._idOwnerCard = data.owner._id;
		this._id = data._id;
		this._idUser = id;
		this._templateElement = templateElement;
		this._handleCardClick = handleCardClick;
		this._deleteCardHandler = deleteCardHandler;
		this._sendLike = sendLike
		this._deleteLike = deleteLike

		this._popupFullScreen = document.querySelector('.popup_type_fullscreen');
		this._imageCard = this._popupFullScreen.querySelector('.card__photo');
		this._imageCaption = this._popupFullScreen.querySelector('.popup__caption');

		this._templates = this._getTemplate()
		this._cardPhotoElement = this._templates.querySelector('.card__photo');
		this._cardLikes = this._templates.querySelector('.card__like-counter');
		this._cardTitle = this._templates.querySelector('.card__title');
		this._likeButton = this._templates.querySelector('.like-button');
		this._buttonCardDelete = this._templates.querySelector('.card__button-delete');
	}


	_getTemplate() {
		return document.querySelector(this._templateElement).content.querySelector('.card').cloneNode(true);
	}

	_basketHandler() {
		if (this._idOwnerCard !== this._idUser) {
			this._buttonCardDelete.setAttribute('disabled', 'disabled');
			this._buttonCardDelete.style = 'visibility:hidden';
		}
	}
	_likeHandler() {
		const checkLike = this._likes.some(({ _id }) => _id === this._idUser);
		if (checkLike === true) {
			this._deleteLike(this._id)
				.then(this._checkTheLike)
				.catch((err) => { console.log(err) })
		}
		else {
			this._sendLike(this._id)
				.then(this._checkTheLike)
				.catch((err) => { console.log(err) })
		}
	}

	_checkTheLike = ({ likes }) => {
		this._likes = likes;
		this._cardLikes.textContent = this._likes.length;
		this._likeButton.classList.toggle('like-button_active');
	}
	generateCard() {
		this._cardPhotoElement.src = this._link;
		this._cardPhotoElement.alt = this._name;
		this._cardTitle.textContent = this._name;
		this._setEventListeners();
		this._basketHandler();
		this._cardLikes.textContent = this._likes.length;
		const checkLike = this._likes.some(({ _id }) => _id === this._idUser);
		if (checkLike === true) {
			this._likeButton.classList.add('like-button_active');
		}

		return this._templates;

	}

	getId() {
		return this._id;
	}
	_clearTemplate() {
		this._templates.remove();
		this._templates = null;
	}



	_setEventListeners() {
		this._likeButton.addEventListener('click', (ev) => {
			this._likeHandler(ev);
		})
		this._buttonCardDelete.addEventListener('click', () => {
			this._deleteCardHandler(this);
		})
		this._cardPhotoElement.addEventListener('click', () => { this._handleCardClick() })
	}

};

export class Card {
	constructor(name, link) {
		this._name = name;
		this._link = link;
	}
	_getTemplate() {
		const cardElement = document.querySelector('#template-card').content.querySelector('.card').cloneNode(true);
		return cardElement;
	}

	_likeHandler(event) {
		event.target.classList.toggle('like-button_active');
	}

	_cardDeleteHandler() {
		this._element.remove();
	}

	_handleOpenPopup() {
		document.querySelector('.popup_type_fullscreen').classList.add('popup_is-open');
	}

	_handleClosePopup() {
		document.querySelector('.popup_type_fullscreen').classList.remove('popup_is-open');
	}

	_handleClickClosePppup(event) {
		if (event.target.classList.contains('popup_type_fullscreen')) {
			this._handleClosePopup();
		}
	}

	_handleKeyClosePopup(event) {
		if (event.key === 'Escape') {
			this._handleClosePopup();
		}
	}

	_cardDeleteListener() {
		this._element.querySelector('.card__button-delete').addEventListener('click', () => {
			this._cardDeleteHandler();
		})
	}

	_setLikeListener() {
		this._element.querySelector('.like-button').addEventListener('click', (event) => {
			this._likeHandler(event);
		});
	};
	_setOpenPopupListener() {
		this._element.querySelector('.card__photo').addEventListener('click', () => {
			this._handleOpenPopup();
			document.querySelector('.popup__photo').src = this._link;
			document.querySelector('.popup__caption').textContent = this._name;
			document.querySelector('.popup__photo').alt = this._name;
		})
	}
	_setClosePopupListener() {
		document.querySelector('.popup__close_type_fullscreen').addEventListener('click', () => {
			this._handleClosePopup();
		});
		document.addEventListener('keydown', (event) => {
			this._handleKeyClosePopup(event);
		});
		document.querySelector('.popup_type_fullscreen').addEventListener('click', (event) => {
			this._handleClickClosePppup(event);
		});
	}

	generateCard() {
		this._element = this._getTemplate();
		this._setLikeListener();
		this._cardDeleteListener();
		this._setOpenPopupListener();
		this._setClosePopupListener();
		this._element.querySelector('.card__photo').src = this._link;
		this._element.querySelector('.card__photo').alt = this._name;//card__title
		this._element.querySelector('.card__title').textContent = this._name;
		return this._element;
	}

};

import { popupFullscreen, poupPhoto, caption } from './utils.js'
export class Card {
	constructor(name, link, templateElement, openPopup) {
		this._name = name;
		this._link = link;
		this._templateElement = templateElement.content.querySelector('.card').cloneNode(true);
		this._openPopup = openPopup;
	}

	_likeHandler(event) {
		event.target.classList.toggle('like-button_active');
	}

	_cardDeleteHandler() {
		this._templateElement.remove();
		this._templateElement = null;
	}

	_cardDeleteListener() {
		this._templateElement.querySelector('.card__button-delete').addEventListener('click', () => {
			this._cardDeleteHandler();
		})
	}

	_setLikeListener() {
		this._templateElement.querySelector('.like-button').addEventListener('click', (event) => {
			this._likeHandler(event);
		});
	};
	_setOpenPopupListener() {
		this._templateElement.querySelector('.card__photo').addEventListener('click', () => {
			this._openPopup(popupFullscreen);
			poupPhoto.src = this._link;
			caption.textContent = this._name;
			poupPhoto.alt = this._name;
		})
	}

	generateCard() {
		const cardPhotoElement = this._templateElement.querySelector('.card__photo');
		this._setLikeListener();
		this._cardDeleteListener();
		this._setOpenPopupListener();
		cardPhotoElement.src = this._link;
		cardPhotoElement.alt = this._name;//card__title
		this._templateElement.querySelector('.card__title').textContent = this._name;
		return this._templateElement;
	}

};

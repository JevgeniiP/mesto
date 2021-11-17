import { Card } from './Cards.js';

const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');

const formProfile = document.querySelector('.popup__form_type_profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const editButtonProfile = document.querySelector('.profile__button-edit');
const popupProfileCloseButton = document.querySelector('.popup__close_type_profile');

const inputName = formProfile.querySelector('.popup__input_type_name');
const inputProfession = formProfile.querySelector('.popup__input_type_proffesion');

const formCards = document.querySelector('.popup__form_type_cards');
const cardsEditButton = document.querySelector('.profile__button-add');
const popupCardsCloseButton = document.querySelector('.popup__close_type_cards');

const inputCardName = formCards.querySelector('.popup__input_type_card-name');
const inputCardUrl = formCards.querySelector('.popup__input_type_card-url');

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

window.onload = function () {
	popupProfile.classList.remove('preload');
	popupCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
}

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link);
	const cardElement = card.generateCard();
	document.querySelector('.cards').append(cardElement);

})

function openPopup(popup) {
	popup.classList.add('popup_is-open');
	document.addEventListener('keydown', popupKeyHandler);
}

function closePopup(popup) {
	popup.classList.remove('popup_is-open');
	document.removeEventListener('keydown', popupKeyHandler);
}

function popupClickHandler(event, popup) {
	if (event.target.classList.contains('popup')) {
		closePopup(popup);
	}
};

function popupKeyHandler(event) {
	if (event.key === 'Escape') {
		closePopup(document.querySelector('.popup_is-open'));
	}
};

function refreshInputForm(input) {
	input.value = '';
}

function submitProfileForm(event) {
	event.preventDefault();
	profileName.textContent = inputName.value;
	profileProfession.textContent = inputProfession.value;
	closePopup(popupProfile);
}

function submitCardsForm(event) {
	event.preventDefault();
	const item = {
		name: inputCardName.value,
		link: inputCardUrl.value,
	}

	const card = new Card(item.name, item.link);
	const cardElement = card.generateCard();

	document.querySelector('.cards').prepend(cardElement);

	closePopup(popupCards);
	refreshInputForm(inputCardName);
	refreshInputForm(inputCardUrl);

}

editButtonProfile.addEventListener('click', () => {
	inputName.value = profileName.textContent;
	inputProfession.value = profileProfession.textContent;
	openPopup(popupProfile);
});

cardsEditButton.addEventListener('click', () => {
	openPopup(popupCards);
});

popupProfileCloseButton.addEventListener('click', () => { closePopup(popupProfile) });
popupCardsCloseButton.addEventListener('click', () => { closePopup(popupCards) });

formProfile.addEventListener('submit', submitProfileForm);
formCards.addEventListener('submit', submitCardsForm);

popupFullscreen.addEventListener('click', () => { popupClickHandler(event, popupFullscreen) });
popupProfile.addEventListener('click', () => { popupClickHandler(event, popupProfile) });
popupCards.addEventListener('click', () => { popupClickHandler(event, popupCards) });
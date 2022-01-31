const appendCards = document.querySelector('.cards');

const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');

const formProfile = document.querySelector('.popup__form_type_profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const editButtonProfile = document.querySelector('.profile__button-edit');

const inputName = formProfile.querySelector('.popup__input_type_name');
const inputProfession = formProfile.querySelector('.popup__input_type_proffesion');

const formCards = document.querySelector('.popup__form_type_cards');
const cardsEditButton = document.querySelector('.profile__button-add');

const inputCardName = formCards.querySelector('.popup__input_type_card-name');
const inputCardUrl = formCards.querySelector('.popup__input_type_card-url');

const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupPhoto = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');

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


const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_state_invalid',
	submitButtonSelector: '.popup__save',
	submitButtonErrorClass: 'popup__save_invalid',
};

export { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, inputName, inputProfession, formCards, cardsEditButton, inputCardName, inputCardUrl, popupFullscreen, initialCards, validationConfig, popupPhoto, popupCaption };
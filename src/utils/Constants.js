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


const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupPhoto = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');

const popupConfirm = document.querySelector('.popup_type_confirm');

const popupAvatar = document.querySelector('.popup_type_avatar');
const formAvatar = document.querySelector('.popup__form_type_avatar');
const profileAvatar = document.querySelector('.profile__photo');
const avatarEditButton = document.querySelector('.profile__button-photo-edit');


const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_state_invalid',
	submitButtonSelector: '.popup__save',
	submitButtonErrorClass: 'popup__save_invalid',
};

export { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, inputName, inputProfession, formCards, cardsEditButton, popupFullscreen, validationConfig, popupPhoto, popupCaption, profileAvatar, popupAvatar, formAvatar, avatarEditButton, popupConfirm };
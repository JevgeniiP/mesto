import '../pages/index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js';



import { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, popupProfileCloseButton, inputName, inputProfession, templateCards, formCards, cardsEditButton, popupCardsCloseButton, inputCardName, inputCardUrl, popupFullscreenCloseButton, popupFullscreen, initialCards, validationConfig } from '../components/Constants.js'



window.onload = function () {
	popupProfile.classList.remove('preload');
	popupCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
}

const addFormValidationImage = new FormValidator(validationConfig, formCards);
const addFormValidationProfile = new FormValidator(validationConfig, formProfile);

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();


function createElements(data) {
	const card = new Card(data, '.template', () => imagePopup.open(data));
	section.addItem(card.generateCard());
}

const section = new Section(
	{
		items: initialCards,
		renderer: createElements,
	},
	appendCards
);
section.renderedItems();

const profileInfo = new UserInfo({
	name: profileName,
	profession: profileProfession,
});

const imagePopup = new PopupWithImage(popupFullscreen);
const profilePopup = new PopupWithForm(popupProfile, handleProfileSubmit);//!
const cardPopup = new PopupWithForm(popupCards, addNewElement);//!

function profileEditHandler() {
	const { name, profession } = profileInfo.getUserInfo();
	inputName.value = name;
	inputProfession.value = profession;
	profilePopup.open();
}

function handleProfileSubmit(data) {
	profileInfo.setUserInfo(data);
}

function elementEditHandler() {
	cardPopup.open()
	inputCardName.value = ''
	inputCardUrl.value = ''
}

function addNewElement() {
	const newValues = {
		name: inputCardName.value,
		link: inputCardUrl.value,
	}
	createElements(newValues);
};

editButtonProfile.addEventListener('click', profileEditHandler);
cardsEditButton.addEventListener('click', elementEditHandler);
imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

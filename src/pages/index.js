import '../pages/index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js';



import { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, inputName, inputProfession, formCards, cardsEditButton, inputCardName, inputCardUrl, popupFullscreen, initialCards, validationConfig, popupPhoto, popupCaption } from '../utils/Constants.js'



window.onload = function () {
	popupProfile.classList.remove('preload');
	popupCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
}

const addFormValidationImage = new FormValidator(validationConfig, formCards);
const addFormValidationProfile = new FormValidator(validationConfig, formProfile);

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();


function createElement(data) {
	const card = new Card(data, '.template', () => imagePopup.open(data));
	section.addItem(card.generateCard()); //Я всю голову себе сломал. Не понимаю, как это реализовать...
}

const section = new Section(
	{
		items: initialCards,
		renderer: createElement,
	},
	appendCards
);
section.renderedItems();

const profileInfo = new UserInfo({
	name: profileName,
	profession: profileProfession,
});

const imagePopup = new PopupWithImage(popupFullscreen, popupPhoto, popupCaption);
const profilePopup = new PopupWithForm(popupProfile, handleProfileSubmit);//!
const cardPopup = new PopupWithForm(popupCards, addNewElement);//!

function handleProfileEditForm() {
	const { name, profession } = profileInfo.getUserInfo();
	inputName.value = name;
	inputProfession.value = profession;
	addFormValidationProfile.publicHideError();
	profilePopup.open();

}

function handleProfileSubmit(data) {
	profileInfo.setUserInfo(data);
}

function elementEditHandler() { //Пробую убрать баг с активным положением кнопки после создания карточки. Вообще ничего не выходит:( Каким образом передать в сабмит? Расширять класс popupwithform? Можно помощь зала?)
	addFormValidationImage.publicHideError();
	cardPopup.open();
	inputCardName.value = ''
	inputCardUrl.value = ''
}

function addNewElement() {
	const newValues = {
		name: inputCardName.value,
		link: inputCardUrl.value,
	}
	createElement(newValues);
};

editButtonProfile.addEventListener('click', handleProfileEditForm);
cardsEditButton.addEventListener('click', elementEditHandler);
imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

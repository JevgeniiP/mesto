//import '../pages/index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Popup } from '../components/Popup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

import { Api } from '../components/Api.js'

import { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, inputName, inputProfession, formCards, cardsEditButton, inputCardName, inputCardUrl, popupFullscreen, /*initialCards,*/ validationConfig, popupPhoto, popupCaption, profileAvatar, popupAvatar, inputAvatarUrl, formAvatar, avatarEditButton, popupConfirm } from '../utils/constants.js'


const api = new Api({
	adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
	token: '6b8bd9cc-b47e-4e27-bf4a-652bed6e8ef9'
})

//!Добавить в жтот блок v кнопку редактирования аватарки
window.onload = function () {
	popupProfile.classList.remove('preload');
	popupCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
	popupAvatar.classList.remove('preload');
	popupConfirm.classList.remove('preload');
}

const addFormValidationImage = new FormValidator(validationConfig, formCards);
const addFormValidationProfile = new FormValidator(validationConfig, formProfile);
const addFormValidationAvatar = new FormValidator(validationConfig, formAvatar);

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();
addFormValidationAvatar.enableValidation();

const imagePopup = new PopupWithImage(popupFullscreen, popupPhoto, popupCaption);
const profilePopup = new PopupWithForm(popupProfile, handleProfileSubmit);//!
const cardPopup = new PopupWithForm(popupCards, handleCardsSubmit);
const avatarPopup = new PopupWithForm(popupAvatar, handleAvatarSubmit);
const confirmPopup = new PopupWithConfirm(popupConfirm);


//!Логика профиля/////////////////////////////////////////////////////////

Promise.all([api.getProfileInfo(), api.getCards()])
	.then(([userInfo, cards]) => {
		profileInfo.setUserInfo(userInfo);
		cards.forEach(createElement);
	})
	.catch((err) => {
		console.log(err)
	})


const profileInfo = new UserInfo({
	name: profileName,
	profession: profileProfession,
	avatar: profileAvatar,
});

function handleProfileSubmit(data) {
	api.editProfileInfo(data)
		.then((res) => {
			profileInfo.setUserInfo(res)
			profilePopup.close();
		})

		.catch((err) => {
			console.log(err)
		})

}

function openPopupProfile() {
	const { name, profession } = profileInfo.getUserInfo();
	inputName.value = name;
	inputProfession.value = profession;
	addFormValidationProfile.publicHideError();
	profilePopup.open();

}

function handleAvatarSubmit(data) {
	api.editAvatar(data)
		.then((res) => {
			profileInfo.setUserInfo(res)
			avatarPopup.close();
		})
		.catch((err) => {
			console.log(err)
		})
}
function openPopupAvatar() {
	addFormValidationAvatar.publicHideError();
	avatarPopup.open();
}
//!Логика карточек/////////////////////////////////////////////////////////

const section = new Section({
	items: [],
	renderer: createElement
}, appendCards);

function createCards(data) {
	const card = new Card({
		data,
		templateElement: '.template',
		id: profileInfo._id,
		deleteCardHandler: () => {
			confirmPopup.open(() => {
				api.deleteCard(card.getId())
					.then(() => {
						confirmPopup.close();
						card._clearTemplate();
					})
					.catch((err) => {
						console.log(err);
					})
			})
		},
		handleCardClick: () => imagePopup.open(data)
	});
	return card.generateCard();
}

function createElement(data) {
	const card = createCards(data);
	section.addItem(card);

}

function handleCardsSubmit(data) {
	api.sendCards(data)
		.then((data) => {
			createElement(data)
			cardPopup.close()
		})

		.catch((err) => {
			console.log(err);
		})
};

function elementEditHandler() {
	addFormValidationImage.publicHideError();
	cardPopup.open();
}

//!Логика ********/////////////////////////////////////////////////////////

//function elementEditHandler() {
//	addFormValidationImage.publicHideError();
//	cardPopup.open();
//}
//
//function handleCardsSubmit() {
//	const newValues = {
//		name: inputCardName.value,
//		link: inputCardUrl.value,
//	}
//	section.addItem(createElement(newValues));
//};

editButtonProfile.addEventListener('click', openPopupProfile);
cardsEditButton.addEventListener('click', elementEditHandler);
avatarEditButton.addEventListener('click', openPopupAvatar);
imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
avatarPopup.setEventListeners();
confirmPopup.setEventListeners();

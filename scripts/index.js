import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { appendCards, popupProfile, popupCards, formProfile, profileName, profileProfession, editButtonProfile, popupProfileCloseButton, inputName, inputProfession, templateCards, formCards, cardsEditButton, popupCardsCloseButton, inputCardName, inputCardUrl, popupFullscreenCloseButton, popupFullscreen } from './utils.js'
import { initialCards } from './initialCards.js'

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_state_invalid',
	submitButtonSelector: '.popup__save',
	submitButtonErrorClass: 'popup__save_invalid',
};

window.onload = function () {
	popupProfile.classList.remove('preload');
	popupCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
}

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link, templateCards, openPopup);
	newCard(card);

})

const formProfileValidation = new FormValidator(validationConfig, formProfile);
formProfileValidation.enableValidation();

const formCardsValidation = new FormValidator(validationConfig, formCards);
formCardsValidation.enableValidation();

function newCard(card) {
	const cardElement = card.generateCard();
	appendCards.append(cardElement);
}

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

	const card = new Card(item.name, item.link, templateCards, openPopup);
	const cardElement = card.generateCard();

	appendCards.prepend(cardElement);

	closePopup(popupCards);
	refreshInputForm(inputCardName);
	refreshInputForm(inputCardUrl);
	formCardsValidation.setSubmitButtonState();

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
popupFullscreenCloseButton.addEventListener('click', () => { closePopup(popupFullscreen) });


formProfile.addEventListener('submit', submitProfileForm);
formCards.addEventListener('submit', submitCardsForm);

popupFullscreen.addEventListener('click', () => { popupClickHandler(event, popupFullscreen) });
popupProfile.addEventListener('click', () => { popupClickHandler(event, popupProfile) });
popupCards.addEventListener('click', () => { popupClickHandler(event, popupCards) });
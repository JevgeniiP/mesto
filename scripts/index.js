const popupEditProfile = document.querySelector('.popup_type_profile');
const popupProfileCloseButton = document.querySelector('.popup__close_type_profile');
const popupCardsCloseButton = document.querySelector('.popup__close_type_cards');
const popupFullscreenClose = document.querySelector('.popup__close_type_fullscreen');
const editButton = document.querySelector('.profile__button-edit');
const cardsEditButton = document.querySelector('.profile__button-add');
const formProfile = document.querySelector('.popup__form_type_profile');
const formCards = document.querySelector('.popup__form_type_cards');
const inputName = formProfile.querySelector('.popup__input_type_name');
const inputProfession = formProfile.querySelector('.popup__input_type_proffesion');
const inputCardName = formCards.querySelector('.popup__input_type_card-name');
const inputCardUrl = formCards.querySelector('.popup__input_type_card-url');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupAddCards = document.querySelector('.popup_type_cards');
const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const popupFullscreenPhoto = document.querySelector('.popup__photo');
const popupFullscreenCaption = document.querySelector('.popup__caption');
const popupSaveButton = document.querySelector('.popup__save_type_profile');

const cardTemplate = document.querySelector('#template-card').content;
const cardsList = document.querySelector('.cards');

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_state_invalid',
	submitButtonSelector: '.popup__save',
	submitButtonErrorClass: 'popup__save_invalid',
};

window.onload = function () {
	popupEditProfile.classList.remove('preload');
	popupAddCards.classList.remove('preload');
	popupFullscreen.classList.remove('preload');
}


function createCard(item) {

	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const cardPhoto = cardElement.querySelector('.card__photo');

	cardPhoto.src = item.link;
	cardPhoto.alt = item.name;

	cardElement.querySelector('.card__title').textContent = item.name;

	cardElement.querySelector('.like-button').addEventListener('click', function (event) {
		event.target.classList.toggle('like-button_active');
	});

	cardElement.querySelector('.card__button-delete').addEventListener('click', function () {
		cardElement.remove();
	});

	cardPhoto.addEventListener('click', function () {
		openPopup(popupFullscreen);
		popupFullscreenPhoto.src = item.link;
		popupFullscreenCaption.textContent = item.name;
		popupFullscreenCaption.alt = item.name;
	});
	return cardElement;
}

initialCards.forEach(function (item) {
	const cardElement = createCard(item);

	cardsList.append(cardElement);
});

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

function submitProfileForm(event) {
	event.preventDefault();
	profileName.textContent = inputName.value;
	profileProfession.textContent = inputProfession.value;
	closePopup(popupEditProfile);
}

function refreshInputForm(input) {
	input.value = '';
}

function submitCardsForm(event) {
	event.preventDefault();
	const item = {
		name: inputCardName.value,
		link: inputCardUrl.value,
	}
	const cardElement = createCard(item);
	const buttonCreateCards = document.querySelector('.popup__save_type_cards');
	cardsList.prepend(cardElement);
	closePopup(popupAddCards);
	refreshInputForm(inputCardName);
	refreshInputForm(inputCardUrl);
	setSubmitButtonState(formCards, validationConfig);
}

editButton.addEventListener('click', () => {
	inputName.value = profileName.textContent;
	inputProfession.value = profileProfession.textContent;
	openPopup(popupEditProfile);
});
cardsEditButton.addEventListener('click', () => {
	openPopup(popupAddCards);
});

popupProfileCloseButton.addEventListener('click', () => { closePopup(popupEditProfile) });
popupCardsCloseButton.addEventListener('click', () => { closePopup(popupAddCards) });

formProfile.addEventListener('submit', submitProfileForm);
formCards.addEventListener('submit', submitCardsForm);

popupFullscreenClose.addEventListener('click', () => { closePopup(popupFullscreen) });

popupFullscreen.addEventListener('click', () => { popupClickHandler(event, popupFullscreen) });
popupEditProfile.addEventListener('click', () => { popupClickHandler(event, popupEditProfile) });
popupAddCards.addEventListener('click', () => { popupClickHandler(event, popupAddCards) });

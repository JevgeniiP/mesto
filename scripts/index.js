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

const cardTemplate = document.querySelector('#template-card').content;
const cardsList = document.querySelector('.cards');

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



initialCards.forEach(function (item) {

	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	const cardPhoto = cardElement.querySelector('.card__photo');
	cardPhoto.src = item.link;

	cardElement.querySelector('.card__title').textContent = item.name;
	cardElement.querySelector('.card__title').alt = item.name;

	cardElement.querySelector('.like-button').addEventListener('click', function (event) {
		event.target.classList.toggle('like-button_active');
	});

	cardElement.querySelector('.card__button-delete').addEventListener('click', function () {
		cardElement.remove();
	});

	cardPhoto.addEventListener('click', function (event) {
		popupFullscreen.classList.add('popup_is-open');
		popupFullscreenPhoto.src = item.link;
		popupFullscreenCaption.textContent = item.name;
		popupFullscreenCaption.alt = item.name;
	});

	cardsList.append(cardElement);
});

function popupOpen(event) {
	if (event.target === editButton) {
		inputName.value = profileName.textContent;
		inputProfession.value = profileProfession.textContent;
		popupEditProfile.classList.add('popup_is-open');
	}
	else if (event.target === cardsEditButton) {
		popupAddCards.classList.add('popup_is-open');
	}
}

function popupClose(event) {
	if (event.target === popupProfileCloseButton || event.target === formProfile) {
		popupEditProfile.classList.remove('popup_is-open');
	}
	else if (event.target === popupCardsCloseButton || event.target === formCards) {
		popupAddCards.classList.remove('popup_is-open');
	}
	else if (event.target === popupFullscreenClose) {
		popupFullscreen.classList.remove('popup_is-open');
	}
}

function submitForm(event) {
	if (event.target === formProfile) {
		event.preventDefault();

		profileName.textContent = inputName.value;
		profileProfession.textContent = inputProfession.value;
		popupClose(event);
	}
	else if (event.target === formCards) {
		event.preventDefault();

		const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
		const cardPhoto = cardElement.querySelector('.card__photo');
		cardPhoto.src = inputCardUrl.value;

		cardElement.querySelector('.card__title').textContent = inputCardName.value;
		cardElement.querySelector('.card__title').alt = inputCardName.value;

		cardElement.querySelector('.like-button').addEventListener('click', function (event) {
			event.target.classList.toggle('like-button_active');
		});

		cardElement.querySelector('.card__button-delete').addEventListener('click', function () {
			cardElement.remove();
		});

		cardPhoto.addEventListener('click', function (event) {
			popupFullscreen.classList.add('popup_is-open');
			popupFullscreenPhoto.src = inputCardUrl.value;
			popupFullscreenCaption.textContent = inputCardName.value;
			popupFullscreenCaption.alt = inputCardName.value;
		});

		cardsList.prepend(cardElement);
		popupClose(event);
	}

}

editButton.addEventListener('click', popupOpen);
cardsEditButton.addEventListener('click', popupOpen);

popupProfileCloseButton.addEventListener('click', popupClose);
popupCardsCloseButton.addEventListener('click', popupClose);

formProfile.addEventListener('submit', submitForm);
formCards.addEventListener('submit', submitForm);

popupFullscreenClose.addEventListener('click', popupClose);
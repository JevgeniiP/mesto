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
//Подскажи пожалуйста, каким образом возможно перенести переменные в отдельный js и как связать файл с переменными и кодом. Спасибо:)
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
		popupFullscreen.classList.add('popup_is-open');
		popupFullscreenPhoto.src = item.link;
		popupFullscreenCaption.textContent = item.name;
		popupFullscreenCaption.alt = item.name;
	});
	return cardElement; //Опытным путем пришел к тому, что здесь необходимо вернуть значение cardElement, но для чего ее возвращать  вданном случае?
	//Думаю, что возвращать его нужно для того, чтобы при проходе цикла на каждый новый виток возваращалось значение этой константы. Я прав?
}

initialCards.forEach(function (item) {
	const cardElement = createCard(item);

	cardsList.append(cardElement);
});

function openPopup(popup) {
	popup.classList.add('popup_is-open');
}


function popupEventOpen(event) {
	if (event.target === editButton) {
		inputName.value = profileName.textContent;
		inputProfession.value = profileProfession.textContent;
		openPopup(popupEditProfile);
	}
	else if (event.target === cardsEditButton) {
		openPopup(popupAddCards);
	}
}

function closePopup(popup) {
	popup.classList.remove('popup_is-open');
}

function popupEventClose(event) {
	if (event.target === popupProfileCloseButton || event.target === formProfile) {
		closePopup(popupEditProfile);
	}
	else if (event.target === popupCardsCloseButton || event.target === formCards) {
		closePopup(popupAddCards);
	}
	else if (event.target === popupFullscreenClose) {
		closePopup(popupFullscreen);
	}
}

function submitProfileForm(event) {
	event.preventDefault();
	profileName.textContent = inputName.value;
	profileProfession.textContent = inputProfession.value;
	popupEventClose(event);
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
	cardsList.prepend(cardElement);
	popupEventClose(event);
	refreshInputForm(inputCardName);
	refreshInputForm(inputCardUrl);
}

editButton.addEventListener('click', popupEventOpen);
cardsEditButton.addEventListener('click', popupEventOpen);

popupProfileCloseButton.addEventListener('click', popupEventClose);
popupCardsCloseButton.addEventListener('click', popupEventClose);

formProfile.addEventListener('submit', submitProfileForm);
formCards.addEventListener('submit', submitCardsForm);

popupFullscreenClose.addEventListener('click', popupEventClose);
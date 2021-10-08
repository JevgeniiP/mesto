const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__button-edit');
const form = document.querySelector('.popup__form');
const inputName = form.querySelector('.popup__input_type_name');
const inputProfession = form.querySelector('.popup__input_type_proffesion');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession')


function popupOpen() {
	inputName.value = profileName.textContent;
	inputProfession.value = profileProfession.textContent;
	popup.classList.add('popup_is-open');
}

function popupClose() {
	popup.classList.remove('popup_is-open');
}

function submitForm(event) {
	event.preventDefault();
	profileName.textContent = inputName.value;
	profileProfession.textContent = inputProfession.value;
	popupClose();
}

editButton.addEventListener('click', popupOpen);

popupCloseButton.addEventListener('click', popupClose);

form.addEventListener('submit', submitForm);
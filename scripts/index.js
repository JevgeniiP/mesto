const popup = document.querySelector('.popup');
const popupSaveButton = document.querySelector('.popup__save');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__button-edit');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_name');
const inputProfession = document.querySelector('.popup__input_proffesion');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession')

inputName.value = profileName.textContent;
inputProfession.value = profileProfession.textContent;

function popupOpen() {
	popup.classList.add('popup_isOpen');
}

function popupClose() {
	popup.classList.remove('popup_isOpen');
}

editButton.addEventListener('click', popupOpen);

popupCloseButton.addEventListener('click', popupClose);

popup.addEventListener('mouseup', popupClickHendler);

function popupClickHendler(event) {

	if (event.target.classList.contains('popup')) {
		popupClose();
	}

}

function submitForm(event) {
	event.preventDefault();
	profileName.textContent = inputName.value;
	profileProfession.textContent = inputProfession.value;
	popupClose();
}

form.addEventListener('submit', submitForm);
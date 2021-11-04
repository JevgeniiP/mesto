enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	inputErrorClass: 'popup__input_state_invalid',
	submitButtonSelector: '.popup__save',
	submitButtonErrorClass: 'popup__save_invalid',
});

function enableValidation(config) {
	const forms = Array.from(document.querySelectorAll(config.formSelector));

	forms.forEach((form) => {
		setFormListeners(form, config)
	})
};

function setFormListeners(form, config) {

	const inputs = Array.from(form.querySelectorAll(config.inputSelector));

	inputs.forEach((input) => {
		input.addEventListener('input', function () {
			setSubmitButtonState(form, config)
			handleFieldValidation(input, form, config)
		});
	});


};

function setSubmitButtonState(form, config) {
	const button = form.querySelector(config.submitButtonSelector);

	button.disabled = !form.checkValidity();
	button.classList.toggle(config.submitButtonErrorClass, !form.checkValidity())
};

function handleFieldValidation(input, form, config) {
	if (!input.validity.valid) {
		showError(input, form, config);
	} else {
		hideError(input, form, config);
	}
};

function showError(input, form, config) {
	const errorElement = form.querySelector(`#${input.id}-error`);
	input.classList.add(config.inputErrorClass);

	errorElement.textContent = input.validationMessage;
};

function hideError(input, form, config) {
	const errorElement = form.querySelector(`#${input.id}-error`);
	input.classList.remove(config.inputErrorClass);

	errorElement.textContent = '';
};

function buttonState(button) {
	button.setAttribute('disabled', '');
	button.classList.add('popup__save_invalid');
};
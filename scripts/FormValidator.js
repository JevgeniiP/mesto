export class FormValidator {
	constructor(config, form) {
		this._config = config;
		this._form = form;
		this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
	}

	setSubmitButtonState() {
		this._submitButton.disabled = !this._form.checkValidity();
		this._submitButton.classList.toggle(this._config.submitButtonErrorClass, !this._form.checkValidity())
	};

	_handleFieldValidation(input) {
		if (!input.validity.valid) {
			this._showError(input);
		} else {
			this._hideError(input);
		}
	};

	_showError(input) {
		const errorElement = this._form.querySelector(`#${input.id}-error`);
		input.classList.add(this._config.inputErrorClass);
		errorElement.textContent = input.validationMessage;
	};

	_hideError(input) {
		const errorElement = this._form.querySelector(`#${input.id}-error`);
		input.classList.remove(this._config.inputErrorClass);

		errorElement.textContent = '';
	};

	enableValidation() {
		this._form.addEventListener('submit', (event) => { event.preventDefault(); });
		this._form.addEventListener('input', () => this.setSubmitButtonState());

		const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
		inputs.forEach(inputEl => {
			inputEl.addEventListener('input', () => {
				this._handleFieldValidation(inputEl);
			});
		});

		this.setSubmitButtonState();
	};

}
export class Api {
	constructor({ adress, token }) {
		this._adress = adress;
		this._token = token;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();

		}
		else return Promise.reject(`Ошибка ${res.status}`);
	}

	getProfileInfo() {
		return fetch(`${this._adress}/users/me`, {
			headers: {
				authorization: this._token
			}
		})
			.then(this._handleResponse)
	}
	getCards() {
		return fetch(`${this._adress}/cards`, {
			headers: {
				authorization: this._token
			}
		})
			.then(this._handleResponse)
	}
	sendCards(data) {
		return fetch(`${this._adress}/cards`, {
			method: 'POST',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: data.name,
				link: data.link
			})
		})

			.then(this._handleResponse)
	}


	editProfileInfo(data) {
		return fetch(`${this._adress}/users/me`, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'

			},
			body: JSON.stringify({
				name: data.name,
				about: data.about
			})
		})
			.then(this._handleResponse)
	}

	editAvatar(data) {
		return fetch(`${this._adress}/users/me/avatar`, {
			method: 'PATCH',
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
			.then(this._handleResponse)
	}

}

export class UserInfo {
	constructor({ name, profession, avatar }) {
		this._name = name;
		this._profession = profession;
		this._avatar = avatar;

	}

	getUserInfo() {
		return {
			name: this._name.textContent,
			profession: this._profession.textContent
		}
	}

	setUserInfo({ name, about, avatar, id }) {
		this._name.textContent = name;
		this._profession.textContent = about;
		this._avatar.src = avatar;
		this._id = id;
	}
}
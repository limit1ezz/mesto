class UserInfo {
  constructor({ profileName, profileDescription }) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileDescription: this._profileDescription.textContent,
    };
  }

  setUserInfo(userNameValue, jobDescriptionValue) {
    this._profileName.textContent = userNameValue;
    this._profileDescription.textContent = jobDescriptionValue;
  }
}

export default UserInfo;


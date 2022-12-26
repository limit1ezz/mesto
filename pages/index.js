import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardsData,
  validationSettings,
  profileDescription,
  profileName,
  photosContainer,
  editProfileBtn,
  addPhotoCardBtn,
  closePopupBtns,
  popups,
  editProfilePopup,
  addPhotoCardPopup,
  imagePopup,
  photo,
  caption,
  editProfileForm,
  userName,
  jobDescription,
  addPhotoCardForm,
  placeName,
  imageLink,
  validations,
} from "../utils/constants.js";

/* Popup */

function closePopupWithEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEscape);
}

closePopupBtns.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) closePopup(popup);
  });
});

/* Edit Profile Popup */

const user = new UserInfo({ profileName, profileDescription });

editProfileBtn.addEventListener("click", () => {
  openPopup(editProfilePopup);

  const { profileName, profileDescription } = user.getUserInfo();
  userName.value = profileName;
  jobDescription.value = profileDescription;

  validations["edit-profile"].resetErrors();
  validations["edit-profile"].enableButton();
});

function handleEditProfileForm(evt) {
  evt.preventDefault();
  user.setUserInfo(userName.value, jobDescription.value);
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener("submit", handleEditProfileForm);

/* Add Photo Card Popup */

addPhotoCardBtn.addEventListener("click", (evt) => {
  openPopup(addPhotoCardPopup);
  addPhotoCardForm.reset();

  validations["add-photo-card"].resetErrors();
  validations["add-photo-card"].disableButton();
});

function handleAddPhotoCardForm(evt) {
  evt.preventDefault();
  renderPhotoCard({ name: placeName.value, src: imageLink.value, alt: placeName.value });
  evt.target.reset();
  closePopup(addPhotoCardPopup);
}

addPhotoCardForm.addEventListener("submit", handleAddPhotoCardForm);

/* Image  Popup */

function openImagePopup(card) {
  photo.src = card.src;
  photo.alt = card.name;
  caption.textContent = card.name;

  openPopup(imagePopup);
}

/* Render Cards */

function createCard(item) {
  const card = new Card(item, "#photo-card", openImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

const photos = new Section(
  {
    items: cardsData,
    renderer: (item) => {
      photos.addItem(createCard(item));
    },
  },
  photosContainer
);

photos.renderItems();

function enableValidation(validationSettings) {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    const validation = new FormValidator(formElement, validationSettings);
    const formName = formElement.getAttribute("name");
    validations[formName] = validation;
    validation.enableValidation();
  });
}

enableValidation(validationSettings);


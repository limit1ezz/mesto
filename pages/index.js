import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

import {
  cardsData,
  validationSettings,
  profileDescription,
  profileName,
  photosContainer,
  editProfileBtn,
  addPhotoCardBtn,
  editProfilePopup,
  addPhotoCardPopup,
  imagePopup,
  userName,
  jobDescription,
  validations,
} from "../utils/constants.js";

/* Edit Profile Popup */

const user = new UserInfo({ profileName, profileDescription });

function handleEditProfileForm(inputValues) {
  user.setUserInfo(inputValues["user-name"], inputValues["job-description"]);
}

const editProfilePopupWithForm = new PopupWithForm(editProfilePopup, handleEditProfileForm);
editProfilePopupWithForm.setEventListeners();

editProfileBtn.addEventListener("click", () => {
  editProfilePopupWithForm.open();

  const { profileName, profileDescription } = user.getUserInfo();
  userName.value = profileName;
  jobDescription.value = profileDescription;

  validations["edit-profile"].resetErrors();
  validations["edit-profile"].enableButton();
});

/* Add Photo Card Popup */

function handleAddPhotoCardForm(inputValues) {
  photos.addItem(
    createCard({
      name: inputValues["place-name"],
      alt: inputValues["place-name"],
      src: inputValues["image-link"],
    })
  );
}

const addPhotoCardPopupWithForm = new PopupWithForm(addPhotoCardPopup, handleAddPhotoCardForm);
addPhotoCardPopupWithForm.setEventListeners();

addPhotoCardBtn.addEventListener("click", (evt) => {
  addPhotoCardPopupWithForm.open();

  validations["add-photo-card"].resetErrors();
  validations["add-photo-card"].disableButton();
});

/* Image Popup */

const imagePopupWithImage = new PopupWithImage(imagePopup);
imagePopupWithImage.setEventListeners();

function handleCardClick(card) {
  imagePopupWithImage.open(card);
}

/* Render Cards */

function createCard(item) {
  const card = new Card(item, "#photo-card", handleCardClick);
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


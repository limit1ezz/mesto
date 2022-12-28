import "./index.css";
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

function handleEditProfileForm({ userName, jobDescription }) {
  user.setUserInfo(userName, jobDescription);
}

const popupEditProfile = new PopupWithForm(editProfilePopup, handleEditProfileForm);
popupEditProfile.setEventListeners();

editProfileBtn.addEventListener("click", () => {
  popupEditProfile.open();

  const { profileName, profileDescription } = user.getUserInfo();
  userName.value = profileName;
  jobDescription.value = profileDescription;

  const { editProfile } = validations;
  editProfile.resetErrors();
  editProfile.enableButton();
});

/* Add Photo Card Popup */

function handleAddPhotoCardForm({ placeName, imageLink }) {
  photos.addItem(
    createCard({
      name: placeName,
      alt: placeName,
      src: imageLink,
    })
  );
}

const popupAddPhotoCard = new PopupWithForm(addPhotoCardPopup, handleAddPhotoCardForm);
popupAddPhotoCard.setEventListeners();

addPhotoCardBtn.addEventListener("click", () => {
  popupAddPhotoCard.open();

  const { addPhotoCard } = validations;
  addPhotoCard.resetErrors();
  addPhotoCard.disableButton();
});

/* Image Popup */

const popupImage = new PopupWithImage(imagePopup);
popupImage.setEventListeners();

function handleCardClick(card) {
  popupImage.open(card);
}

/* Render Cards */

function createCard(item) {
  const card = new Card(item, "#photo-card", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const photos = new Section(
  {
    renderer: (item) => {
      photos.addItem(createCard(item));
    },
  },
  photosContainer
);

photos.renderItems(cardsData);

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


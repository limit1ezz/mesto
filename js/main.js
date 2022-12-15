/* Dom Elements */

import Card from "./Card.js";
import { initialCards } from "./constants.js";

// Elements
const profileDescription = document.querySelector(".profile__description");
const profileName = document.querySelector(".profile__name");
const photosContainer = document.querySelector(".photos__inner");

// Buttons
const editProfileBtn = document.querySelector(".profile__edit");
const addPhotoCardBtn = document.querySelector(".profile__add-photo-card");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");

// Popups
const popups = document.querySelectorAll(".popup");

const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addPhotoCardPopup = document.querySelector(".popup_type_add-photo-card");
const imagePopup = document.querySelector(".popup_type_image");
const photo = imagePopup.querySelector(".image-card__photo");
const caption = imagePopup.querySelector(".image-card__caption");

// Form
const editProfileForm = document.forms["edit-profile"];
const userName = editProfileForm.elements["user-name"];
const jobDescription = editProfileForm.elements["job-description"];

const addPhotoCardForm = document.forms["add-photo-card"];
const placeName = addPhotoCardForm.elements["place-name"];
const imageLink = addPhotoCardForm.elements["image-link"];

const editProfileFormBtn = editProfileForm.querySelector(".form__button");
const addPhotoCardFormBtn = addPhotoCardForm.querySelector(".form__button");

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
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) closePopup(popup);
  });
});

/* Edit Profile Popup */

editProfileBtn.addEventListener("click", () => {
  openPopup(editProfilePopup);
  userName.value = profileName.textContent;
  jobDescription.value = profileDescription.textContent;
  resetErrors(editProfilePopup, validationSettings);
  enableButton(editProfileFormBtn, validationSettings);
});

function handleEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = jobDescription.value;
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener("submit", handleEditProfileForm);

/* Add Photo Card Popup */

addPhotoCardBtn.addEventListener("click", (evt) => {
  openPopup(addPhotoCardPopup);
  addPhotoCardForm.reset();
  resetErrors(addPhotoCardPopup, validationSettings);
  disableButton(addPhotoCardFormBtn, validationSettings);
});

function handleAddPhotoCardForm(evt) {
  evt.preventDefault();
  renderPhotoCard({ title: placeName.value, src: imageLink.value, alt: placeName.value });
  evt.target.reset();
  closePopup(addPhotoCardPopup);
}

addPhotoCardForm.addEventListener("submit", handleAddPhotoCardForm);

/* Image  Popup*/

function openImagePopup(card) {
  photo.src = card.src;
  photo.alt = card.name;
  caption.textContent = card.name;

  openPopup(imagePopup);
}

initialCards.forEach((item) => {
  const card = new Card(item, "#photo-card", openImagePopup);
  const cardElement = card.generateCard();
  photosContainer.prepend(cardElement);
});


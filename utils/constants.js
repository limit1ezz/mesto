export const cardsData = [
  {
    name: "Карачаевск",
    src: "./images/photo-grid-atharva-tulsi.jpg",
  },
  {
    name: "Собака на стоге сена",
    src: "./images/photo-grid-tuman.jpg",
  },
  {
    name: "Озеро Байкал",
    src: "./images/photo-grid-baikal.jpg",
  },
  {
    name: "Гора Эльбрус",
    src: "./images/photo-grid-elbrus.jpg",
  },
  {
    name: "Сочи",
    src: "./images/photo-grid-sochi.jpg",
  },

  {
    name: "Домбай",
    src: "./images/photo-grid-baikal-2.jpg",
  },
];

export const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error-message_active",
};

export const validations = {};

/* Dom Elements */

// Elements
export const profileDescription = document.querySelector(".profile__description");
export const profileName = document.querySelector(".profile__name");
export const photosContainer = document.querySelector(".photos__inner");

// Buttons
export const editProfileBtn = document.querySelector(".profile__edit");
export const addPhotoCardBtn = document.querySelector(".profile__add-photo-card");
export const closePopupBtns = document.querySelectorAll(".popup__close-btn");

// Popups
export const popups = document.querySelectorAll(".popup");

export const editProfilePopup = document.querySelector(".popup_type_edit-profile");
export const addPhotoCardPopup = document.querySelector(".popup_type_add-photo-card");
export const imagePopup = document.querySelector(".popup_type_image");
export const photo = imagePopup.querySelector(".image-card__photo");
export const caption = imagePopup.querySelector(".image-card__caption");

// Form
export const editProfileForm = document.forms["edit-profile"];
export const userName = editProfileForm.elements["user-name"];
export const jobDescription = editProfileForm.elements["job-description"];

export const addPhotoCardForm = document.forms["add-photo-card"];
export const placeName = addPhotoCardForm.elements["place-name"];
export const imageLink = addPhotoCardForm.elements["image-link"];


import atharvaTulsi from "../images/photo-grid-atharva-tulsi.jpg";
import tuman from "../images/photo-grid-tuman.jpg";
import baikal from "../images/photo-grid-baikal.jpg";
import elbrus from "../images/photo-grid-elbrus.jpg";
import sochi from "../images/photo-grid-sochi.jpg";
import baikal2 from "../images/photo-grid-baikal-2.jpg";

export const cardsData = [
  {
    name: "Карачаевск",
    src: atharvaTulsi,
  },
  {
    name: "Собака на стоге сена",
    src: tuman,
  },
  {
    name: "Озеро Байкал",
    src: baikal,
  },
  {
    name: "Гора Эльбрус",
    src: elbrus,
  },
  {
    name: "Сочи",
    src: sochi,
  },

  {
    name: "Домбай",
    src: baikal2,
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

// Popups
export const editProfilePopup = document.querySelector(".popup_type_edit-profile");
export const addPhotoCardPopup = document.querySelector(".popup_type_add-photo-card");
export const imagePopup = document.querySelector(".popup_type_image");

// Form
export const editProfileForm = document.forms["edit-profile"];
export const userName = editProfileForm.elements["user-name"];
export const jobDescription = editProfileForm.elements["job-description"];


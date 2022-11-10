const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/*
const photos = document.querySelector(".photos");
const likes = photos.querySelectorAll(".photo-card__like");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.contains("photo-card__like_active")
      ? like.classList.remove("photo-card__like_active")
      : like.classList.add("photo-card__like_active");
  });
});
*/

/* Dom Elements */
const profileDescription = document.querySelector(".profile__description");
const profileName = document.querySelector(".profile__name");
// Buttons
const editProfileBtn = document.querySelector(".profile__edit");
const addPhotoCardBtn = document.querySelector(".profile__add-photo-card");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");
// Popups
const editProfilePopup = document.querySelector(".popup_edit-profile");
const addPhotoCardPopup = document.querySelector(".popup_add-photo-card");
// Form
const editProfileForm = document.querySelector(".form_edit-profile");
const userName = editProfileForm.querySelector(".form__input_type_user-name");
const jobDescription = editProfileForm.querySelector(".form__input_type_job-description");
const addPhotoCardForm = document.querySelector(".form_add-photo-card");
const placeName = addPhotoCardForm.querySelector(".form__input_type_place-name");
const imageLink = addPhotoCardForm.querySelector(".form__input_type_image-link");

/* Event Handlers */
function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
}

function handleEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = jobDescription.value;
  togglePopup(editProfilePopup);
}

/* Event Listeners */
editProfileBtn.addEventListener("click", () => {
  togglePopup(editProfilePopup);

  userName.value = profileName.textContent;
  jobDescription.value = profileDescription.textContent;
});

addPhotoCardBtn.addEventListener("click", () => {
  togglePopup(addPhotoCardPopup);
});

closePopupBtns.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => togglePopup(popup));
});

editProfileForm.addEventListener("submit", handleEditProfileForm);


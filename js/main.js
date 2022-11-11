const initialCards = [
  {
    title: "Карачаевск",
    src: "./images/photo-grid-atharva-tulsi.jpg",
  },
  {
    title: "Собака на стоге сена",
    src: "./images/photo-grid-tuman.jpg",
  },
  {
    title: "Озеро Байкал",
    src: "./images/photo-grid-baikal.jpg",
  },
  {
    title: "Гора Эльбрус",
    src: "./images/photo-grid-elbrus.jpg",
  },
  {
    title: "Сочи",
    src: "./images/photo-grid-sochi.jpg",
  },

  {
    title: "Домбай",
    src: "./images/photo-grid-baikal-2.jpg",
  },
];

/* Dom Elements */

// Elements
const profileDescription = document.querySelector(".profile__description");
const profileName = document.querySelector(".profile__name");
const photosContainer = document.querySelector(".photos__inner");

// Buttons
const editProfileBtn = document.querySelector(".profile__edit");
const addPhotoCardBtn = document.querySelector(".profile__add-photo-card");
const closePopupBtns = document.querySelectorAll(".popup__close-btn");

// Popups
const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addPhotoCardPopup = document.querySelector(".popup_type_add-photo-card");

// Form
const editProfileForm = document.querySelector(".form_edit-profile");
const userName = editProfileForm.querySelector(".form__input_type_user-name");
const jobDescription = editProfileForm.querySelector(".form__input_type_job-description");
const addPhotoCardForm = document.querySelector(".form_add-photo-card");
const placeName = addPhotoCardForm.querySelector(".form__input_type_place-name");
const imageLink = addPhotoCardForm.querySelector(".form__input_type_image-link");

// Templates
const photoCardTemplate = document
  .querySelector("#photo-card")
  .content.querySelector(".photos__item");

/* Utility Functions */

function clearInputs(...inputs) {
  inputs.forEach((input) => (input.value = ""));
}

/* Popup */

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

closePopupBtns.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

/* Edit Profile Popup */

editProfileBtn.addEventListener("click", () => {
  openPopup(editProfilePopup);
  userName.value = profileName.textContent;
  jobDescription.value = profileDescription.textContent;
});

function handleEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileDescription.textContent = jobDescription.value;
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener("submit", handleEditProfileForm);

/* Add Photo Card Popup */

addPhotoCardBtn.addEventListener("click", () => {
  openPopup(addPhotoCardPopup);
  clearInputs(placeName, imageLink);
});

function handleAddPhotoCardForm(evt) {
  evt.preventDefault();
  renderPhotoCard({ title: placeName.value, src: imageLink.value, alt: placeName.value });
  evt.target.reset();
  closePopup(addPhotoCardPopup);
}

addPhotoCardForm.addEventListener("submit", handleAddPhotoCardForm);

/* Photo Card */

function generatePhotoCard(card) {
  // Elements
  const newPhotoCard = photoCardTemplate.cloneNode(true);
  const image = newPhotoCard.querySelector(".photo-card__image");
  const title = newPhotoCard.querySelector(".photo-card__title");
  const likeBtn = newPhotoCard.querySelector(".photo-card__like");
  const deleteBtn = newPhotoCard.querySelector(".photo-card__delete");

  image.src = card.src;
  image.alt = card.title;
  title.textContent = card.title;

  // Event Handlers
  function handleLikePhotoCard(evt) {
    evt.target.classList.toggle("photo-card__like_active");
  }

  function handleDeletePhotoCard(evt) {
    evt.target.closest(".photos__item").remove();
  }

  function handleImagePopup() {
    const imagePopup = document.querySelector(".popup_type_image");
    const image = imagePopup.querySelector(".image-card__photo");
    const caption = imagePopup.querySelector(".image-card__caption");

    image.src = card.src;
    image.alt = card.title;
    caption.textContent = card.title;

    openPopup(imagePopup);
  }

  // Event Listeners
  likeBtn.addEventListener("click", handleLikePhotoCard);
  deleteBtn.addEventListener("click", handleDeletePhotoCard);
  image.addEventListener("click", handleImagePopup);

  return newPhotoCard;
}

function renderPhotoCard(card) {
  photosContainer.prepend(generatePhotoCard(card));
}

initialCards.forEach((card) => {
  renderPhotoCard(card);
});


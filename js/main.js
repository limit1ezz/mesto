const profileEdit = document.querySelector(".profile__edit");
const profileDescription = document.querySelector(".profile__description");
const profileName = document.querySelector(".profile__name");
const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector(".popup__close-btn");
const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector("#user-name-input");
const descriptionInput = formElement.querySelector("#job-description-input");

function openPopupHandler() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function closePopupHandler() {
  popup.classList.remove("popup_opened");
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopupHandler();
}

profileEdit.addEventListener("click", openPopupHandler);
closeBtn.addEventListener("click", closePopupHandler);
formElement.addEventListener("submit", submitFormHandler);

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


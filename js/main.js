let profileEdit = document.querySelector(".profile__edit");
let profileDescription = document.querySelector(".profile__description");
let profileName = document.querySelector(".profile__name");
let popup = document.querySelector(".popup");
let closeBtn = popup.querySelector(".popup__close-btn");
let formElement = document.querySelector(".form");
let nameInput = formElement.querySelector("#name-input");
let descriptionInput = formElement.querySelector("#description-input");
let photos = document.querySelector(".photos");
let likes = photos.querySelectorAll(".photo-card__like");

function openPopupHandler() {
  popup.classList.add("popup_opened");
  console.log(profileName);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  // When the modal is shown, we want a fixed body
  document.body.style.overflow = "hidden";
}

function closePopupHandler() {
  popup.classList.remove("popup_opened");
  // When the modal is closed, we want a scrolled body
  document.body.style.overflow = "auto";
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopupHandler();
}

profileEdit.addEventListener("click", openPopupHandler);
closeBtn.addEventListener("click", closePopupHandler);
formElement.addEventListener("submit", formSubmitHandler);

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.contains("photo-card__like_active")
      ? like.classList.remove("photo-card__like_active")
      : like.classList.add("photo-card__like_active");
  });
});


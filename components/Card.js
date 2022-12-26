class Card {
  constructor(card, templateSelector, openImagePopup) {
    this._src = card.src;
    this._name = card.name;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photos__item")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikePhotoCard() {
    this._likeBtn.classList.toggle("photo-card__like_active");
  }

  _handleDeletePhotoCard() {
    this._element.remove();
  }

  _handleImagePopup() {
    this._openImagePopup({ src: this._src, name: this._name });
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikePhotoCard();
    });
    this._deleteBtn.addEventListener("click", () => {
      this._handleDeletePhotoCard();
    });
    this._image.addEventListener("click", () => {
      this._handleImagePopup();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".photo-card__image");
    this._title = this._element.querySelector(".photo-card__title");
    this._likeBtn = this._element.querySelector(".photo-card__like");
    this._deleteBtn = this._element.querySelector(".photo-card__delete");

    this._setEventListeners();

    this._image.src = this._src;
    this._image.alt = this._name;
    this._title.textContent = this._name;

    return this._element;
  }
}

export default Card;

import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open({ src, name }) {
    super.open();
    this._photo = this._popup.querySelector(".image-card__photo");
    this._caption = this._popup.querySelector(".image-card__caption");
    this._photo.src = src;
    this._photo.alt = name;
    this._caption.textContent = name;
  }
}

export default PopupWithImage;


function showInputError(formElement, inputElement, errorMessage, validationSettings) {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, validationSettings) {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}

function checkIsValid(formElement, inputElement, validationSettings) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}

function disableButton(buttonElement, validationSettings) {
  const { inactiveButtonClass } = validationSettings;
  buttonElement.classList.add(inactiveButtonClass);
}

function enableButton(buttonElement, validationSettings) {
  const { inactiveButtonClass } = validationSettings;
  buttonElement.classList.remove(inactiveButtonClass);
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, validationSettings);
  } else {
    enableButton(buttonElement, validationSettings);
  }
}

function setEventListeners(formElement, validationSettings) {
  const { inputSelector, submitButtonSelector } = validationSettings;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkIsValid(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation(validationSettings) {
  const { formSelector } = validationSettings;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, validationSettings);
  });
}

// Вызовем функцию
enableValidation(validationSettings);


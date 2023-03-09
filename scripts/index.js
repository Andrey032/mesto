const popupElement = document.querySelector(".popup");
const popupCloseButton = popupElement.querySelector(".popup__close-button");
const popupOpenButton = document.querySelector(".profile__edit-button");

const openPopup = function () {
  popupElement.classList.add("popup_opened");
};

const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};

popupCloseButton.addEventListener("click", closePopup);
popupOpenButton.addEventListener("click", openPopup);

const formElement = popupElement.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_input_name");
const jobInput = formElement.querySelector(".popup__name_input_job");
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

function handleFormSubmit(evt) {
  evt.preventDefault();
  const elementByAttributeName = formElement.querySelector('[name="name"]').value;
  const elementByAttributeJob = formElement.querySelector('[name="job"]').value;

  profileName.textContent = elementByAttributeName;
  profileJob.textContent = elementByAttributeJob;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);



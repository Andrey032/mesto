const popupElement = document.querySelector(".popup");
const popupCloseButton = popupElement.querySelector(".popup__close-button");
const popupOpenButton = document.querySelector(".profile__edit-button");
const formElement = popupElement.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_input_name");
const jobInput = formElement.querySelector(".popup__name_input_job");
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const openPopup = function () {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};

popupCloseButton.addEventListener("click", closePopup);
popupOpenButton.addEventListener("click", openPopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);



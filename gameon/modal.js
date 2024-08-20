// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButtons = document.querySelectorAll(".close-btn");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// applicate the responsive in the topnav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// form validation
function validate(event) {
  event.preventDefault();

  // First name validation
  // Retrieving DOM Elements
  const firstNameInput = document.getElementById("first");
  const firstNameError = document.getElementById("error-name");
  // the value entered in the first name input
  const firstName = firstNameInput.value;
  // variable declaration "false" by default (there is no error)
  let formHasError = false;
  // the first condition appears the error message
  if (firstName.length < 2) {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameInput.classList.add("error-message-input");
    formHasError = true;
    // the second condition does not appear the error message
  } else {
    firstNameError.innerHTML = "";
    firstNameInput.classList.remove("error-message-input");
  }

  // Last name validation
  const lastNameInput = document.getElementById("last");
  const lastNameError = document.getElementById("error-lastName");
  const lastName = lastNameInput.value;
  // the first condition appears the error message
  if (lastName.length < 2) {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameInput.classList.add("error-message-input");
    formHasError = true;
    // the second condition does not appear the error message
  } else {
    lastNameError.innerHTML = "";
    lastNameInput.classList.remove("error-message-input");
  }

  // email validation
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("error-email");
  let email = emailInput.value;
  // This is a regular expression to check if the email address respect this format
  let emailRegExp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]{2,}$/);
  // the first condition does not appears the error message
  if (emailRegExp.test(email)) {
    emailError.innerHTML = "";
    emailInput.classList.remove("error-message-input");
    // the second condition appears the error message
  } else {
    emailError.innerHTML = "Veuillez entrer un email valide.";
    emailInput.classList.add("error-message-input");
    formHasError = true;
  }

  // date of birth validation
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birth-error");
  const birthdate = birthdateInput.value;
  // minimum age required
  const minAge = 18;
  // calculate age
  const toDay = new Date();
  const birthDate = new Date(birthdate);
  let age = toDay.getFullYear() - birthDate.getFullYear();
  const monthDifference = toDay.getMonth() - birthDate.getMonth();
  const dayDifference = toDay.getDate() - birthDate.getDate();

  // Adjust age if the birthdate hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  // the first condition appears the error message
  if (!birthdate) {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    birthdateInput.classList.add("error-message-input");
    formHasError = true;
    // second condition appears the error message
  } else if (age < minAge || (age === minAge && monthDifference < 0)) {
    birthdateError.innerHTML = "Vous devez avoir au moins 18 ans.";
    birthdateInput.classList.add("error-message-input");
    formHasError = true;
    // third condition does not appear the error message (the birthdate is entered correctly)
  } else {
    birthdateError.innerHTML = "";
    birthdateInput.classList.remove("error-message-input");
  }

  // number of Competition validation
  const nbrCompetitionsInput = document.getElementById("quantity");
  const errorNbr = document.getElementById("error-nbr");
  const nbr = nbrCompetitionsInput.value;
  // the first condition appears the error message
  if (nbr < 0 || nbr > 99 || !nbr) {
    errorNbr.innerHTML =
      "Le nombre de compétition doit être compris entre 0 et 99.";
    nbrCompetitionsInput.classList.add("error-message-input");
    formHasError = true;
    // the second condition does not appear the error message
  } else {
    errorNbr.innerHTML = "";
    nbrCompetitionsInput.classList.remove("error-message-input");
  }

  // input radio validation
  const selectedLocation = document.querySelector(
    'input[name="location"]:checked'
  );
  const locationError = document.getElementById("location-error");
  // the first condition appears the error message
  if (!selectedLocation) {
    locationError.innerHTML = "Vous devez sélectionner un emplacement.";
    formHasError = true;
    // the second condition does not appear the error message
  } else {
    locationError.innerHTML = "";
  }

  // general conditions box validation
  const generalConditions = document.getElementById("checkbox1");
  const checkboxError = document.getElementById("checkbox-error");
  // the first condition appears the error message
  if (!generalConditions.checked) {
    checkboxError.innerHTML =
      "Vous devez accepter les conditions d'utilisation.";
    formHasError = true;
    // the second condition does not appear the error message
  } else {
    checkboxError.innerHTML = "";
  }

  // show the thank you message
  if (!formHasError) {
    // this condition checks if formHasError is false
    const thankYouMessage = document.getElementById("thankYouMessage");
    const form = document.querySelector("form");
    // add the class "hidden" to apply its properties
    form.classList.add("hidden");
    // remove the class "hidden" to delete its properties
    thankYouMessage.classList.remove("hidden");
  }
}

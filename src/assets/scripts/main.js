// Seleccionem els elements del DOM
const emailInput = document.querySelector('#footer_email');
const checkbox = document.querySelector('.footer__grid__box__form__checkbox input'); // Checkbox dentro del div
const submitButton = document.querySelector('#footer__boto');

// Faig una validació sencilla del format email
function isValidEmail(email) {
  return /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
}

// Cree una funcio per actualitzar el boto
function updateButtonState() {
    const emailIsValid = isValidEmail(emailInput.value);
    const checkboxIsChecked = checkbox.checked;
    const emailIsEmpty = emailInput.value === '';
    console.log('Email is valid:', emailIsValid); 
    console.log('Checkbox is checked:', checkboxIsChecked);
    console.log('Button disabled:', submitButton.disabled);
    submitButton.disabled = emailIsEmpty || !emailIsValid || !checkboxIsChecked;
  
}

// Faig que les funcions escolten les variacions en el DOM
emailInput.addEventListener('input', updateButtonState);
checkbox.addEventListener('change', updateButtonState);
emailInput.addEventListener('change', updateButtonState);
// Execute la validacio
updateButtonState(); 


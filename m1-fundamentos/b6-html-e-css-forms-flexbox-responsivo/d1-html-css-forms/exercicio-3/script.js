// Prevent submit button default
const submitButton = document.querySelector('#submit-button');
submitButton.onclick = (e) => {
  e.preventDefault();
  formValidation();
};

// Enable submit button if agreement is checked
const agreementInput = document.querySelector('#agreement');
agreementInput.onchange = () => {
  submitButton.disabled = !agreementInput.checked;
};

// Form validation
function formValidation() {
  // Name
  const fullNameInput = document.querySelector('#fullName');
  if (fullNameInput.value.length < 10 || fullNameInput.value.length > 40) {
    alert('Dados inválidos.');
  }

  // Email
  const emailInput = document.querySelector('#email');
  if (emailInput.value.length < 10 || emailInput.value.length > 50) {
    alert('Dados inválidos.');
  }
}

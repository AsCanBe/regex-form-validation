const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

// Validation functions
function isValidUsername(username) {
	return /^\w{6,16}$/.test(username);
}

function isValidPassword(password) {
	return /[A-Z0-9]/.test(password) &&
		   /^\w{6,20}$/.test(password);
}

function isValidTelephone(telephone) {
	return /^\d{5}\s*\d{3}\s*\d{3}\s*$/.test(telephone);
}

function isValidEmail(email) {
	return /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
}

// Formatting functions 
function formatTelephone(text) {
	const regex = /^(\d{5})\s*(\d{3})\s*(\d{3})\s*$/;
	return text.replace(regex, '$1 $2$3');
}

//Utility functions
function showOrHideTip(show, element) {
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

telephoneInput.addEventListener("blur", e => {
	e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));







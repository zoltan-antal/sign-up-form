const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");
const passwordErrorText = document.querySelector(".password-error-text");

passwordRepeatInput.addEventListener("input", checkPasswordError);
passwordInput.addEventListener("input", checkPasswordError);

function checkPasswordError() {
  if (passwordInput.value === "" || passwordRepeatInput.value === "") {
    removePasswordError();
    return;
  }

  if (passwordInput.value !== passwordRepeatInput.value) {
    setPasswordError();
  } else if (passwordInput.value === passwordRepeatInput.value) {
    removePasswordError();
  }
}

function setPasswordError() {
  passwordErrorText.classList.remove("hidden");
  passwordInput.classList.add("error");
  passwordRepeatInput.classList.add("error");
}

function removePasswordError() {
  passwordErrorText.classList.add("hidden");
  passwordInput.classList.remove("error");
  passwordRepeatInput.classList.remove("error");
}
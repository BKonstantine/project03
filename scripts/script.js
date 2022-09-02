const button = document.querySelector(".button");
let formInput = document.querySelector(".form__input");

function checkInput() {
  if (formInput.value) {
    button.textContent = "Круто, спасибо за доверие!";
  } else {    
    button.textContent = "Отремонтируйте камеру";
  }
}

formInput.addEventListener("input", checkInput);

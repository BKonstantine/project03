const button = document.querySelector(".button");
const formInput = document.querySelector(".form__input");

formInput.addEventListener("input", function (evt) {
  if (evt.isTrusted) {
    button.textContent = "Круто, спасибо за доверие!";
  }  
});

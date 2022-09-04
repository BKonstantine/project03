const forms = document.querySelectorAll(".form");

function checkInput(element) {
  const button = element.querySelector(".button");
  let formInput = element.querySelector(".form__input");
  if (formInput.value) {
    button.textContent = "Круто, спасибо за доверие!";
  } else {
    button.textContent = "Отремонтируйте камеру";
  }
}

forms.forEach((form) => {
  form.addEventListener("input", () => checkInput(form));
});

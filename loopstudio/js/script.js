const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

button.addEventListener("click", navToggle);

function navToggle() {
  button.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

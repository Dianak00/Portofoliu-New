const buttonMenu = document.querySelector(".header__close");

buttonMenu.addEventListener("click", () => {
  document.querySelector(".header__list").classList.toggle("toggle-menu");
});

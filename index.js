//mobile menu

const burgerIcon = document.querySelector("#burger");
const navBarMenu = document.querySelector("#navbar-link");

burgerIcon.addEventListener("click", () => {
  navBarMenu.classList.toggle("is-active");
});

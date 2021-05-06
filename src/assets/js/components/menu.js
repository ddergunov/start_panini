// Select DOM items
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu__branding");
const menuNav = document.querySelector(".menu__nav");
const menuItems = document.querySelectorAll(".menu__item");

// Sen initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden"); //! запрет скрола страницы
    menuBtn.classList.toggle("close");
    menu.classList.toggle("show");
    menuBranding.classList.toggle("show");
    menuNav.classList.toggle("show");
    menuItems.forEach((item) => item.classList.toggle("show"));
});

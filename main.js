"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition < navbar.getBoundingClientRect().height) {
    navbar.classList.remove("navbar--dark");
  } else {
    navbar.classList.add("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenuItem = document.querySelectorAll(".navbar__menu__item");
const navbarMenu = document.querySelector(".navbar__menu");

function removeAddMenuItemClass(activeItem) {
  navbarMenuItem.forEach((item) => {
    if (item.textContent.toLowerCase() === activeItem) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = e.target.dataset.link;

  if (!link) {
    return;
  }

  removeAddMenuItemClass(target.textContent.toLowerCase());

  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (e) => {
  removeAddMenuItemClass("contact");

  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

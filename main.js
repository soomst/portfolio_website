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

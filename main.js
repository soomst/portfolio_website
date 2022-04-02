"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const arrowup = document.querySelector(".arrow-up ");

document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition < navbar.getBoundingClientRect().height) {
    navbar.classList.remove("navbar--dark");
  } else {
    navbar.classList.add("navbar--dark");
  }

  fadeInOutOnScroll();
});

//Make home slowly fade to transparent as the window scrolls down
function fadeInOutOnScroll() {
  const home = document.querySelector("#home .section__container");
  const homeHeight = home.getBoundingClientRect().height;
  let opacity = 1 - window.scrollY / homeHeight;

  home.style.opacity = opacity;

  // show "arrow up" button when scrolling down
  if (window.scrollY > homeHeight / 2) {
    arrowup.classList.add("visible");
  } else {
    arrowup.classList.remove("visible");
  }
}

arrowup.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Handle scrolling when tapping on the navbar menu
//const navbarMenuItem = document.querySelectorAll(".navbar__menu__item");
const navbarMenu = document.querySelector(".navbar__menu");
// function removeAddMenuItemClass(activeItem) {
//   navbarMenuItem.forEach((item) => {
//     if (item.textContent.toLowerCase() === activeItem) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// }

navbarMenu.addEventListener("click", (e) => {
  //const target = e.target;
  const link = e.target.dataset.link;

  if (!link) {
    return;
  }

  //removeAddMenuItemClass(target.textContent.toLowerCase());
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (e) => {
  //removeAddMenuItemClass("contact");

  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

//Projects fillter
const workBtnContainer = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".project");
const projectContainer = document.querySelector(".work__projects");

workBtnContainer.addEventListener("click", (e) => {
  const filter =
    e.target.dataset.fillter || e.target.parentNode.dataset.fillter;
  const selectedBtn = document.querySelector(".category__btn.selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;

  selectedBtn.classList.remove("selected");

  if (filter) {
    setTimeout(() => {
      projectContainer.classList.remove("anim-out");

      projectClassified(filter);
      target.classList.add("selected");
    }, 300);
    projectContainer.classList.add("anim-out");
  }
});

function projectClassified(type) {
  projects.forEach((item) => {
    if (type === "*") {
      item.classList.remove("invisible");
    } else {
      if (item.dataset.project === type) {
        item.classList.remove("invisible");
      } else {
        item.classList.add("invisible");
      }
    }
  });
}

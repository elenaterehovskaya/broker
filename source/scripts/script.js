// Меню
let navMain = document.querySelector(".main-screen__nav");
let navToggle = document.querySelector(".main-screen__toggle");
let linkMain = document.querySelector(".menu__link--main");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-screen__nav--closed")) {
    navMain.classList.remove("main-screen__nav--closed");
    navMain.classList.add("main-screen__nav--opened");
  } else {
    navMain.classList.add("main-screen__nav--closed");
    navMain.classList.remove("main-screen__nav--opened");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (navMain.classList.contains("main-screen__nav--opened")) {
      navMain.classList.add("main-screen__nav--closed");
      navMain.classList.remove("main-screen__nav--opened");
    }
  }
});

linkMain.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMain.classList.add("main-screen__nav--closed");
  navMain.classList.remove("main-screen__nav--opened");
});

// Слайдер для блока портфолио — portfolio
let imageNext = document.querySelector(".portfolio__button--next");
let imagePrev = document.querySelector(".portfolio__button--prev");
let images = document.querySelectorAll(".portfolio__item");
let i = 0;

imageNext.addEventListener("click", function() {
  if (images[i].classList.contains("portfolio__item--active")) {
    images[i].classList.remove("portfolio__item--active");
    i++;

    if (i >= images.length) {
      i = 0;
    }
    images[i].classList.add("portfolio__item--active");
  }
});

imagePrev.addEventListener("click", function() {
  if (images[i].classList.contains("portfolio__item--active")) {
    images[i].classList.remove("portfolio__item--active");
    i--;

    if (i < 0) {
      i = images.length - 1;
    }
    images[i].classList.add("portfolio__item--active");
  }
});

// Слайдер для блока отзывов — reviews
let reviewNext = document.querySelector(".reviews__button--next");
let reviewPrev = document.querySelector(".reviews__button--prev");
let reviews = document.querySelectorAll(".reviews__item");
let j = 0;

reviewNext.addEventListener("click", function() {
  if (reviews[j].classList.contains("reviews__item--active")) {
    reviews[j].classList.remove("reviews__item--active");
    j++;

    if (j >= reviews.length) {
      j = 0;
    }
    reviews[j].classList.add("reviews__item--active");
  }
});

reviewPrev.addEventListener("click", function() {
  if (reviews[j].classList.contains("reviews__item--active")) {
    reviews[j].classList.remove("reviews__item--active");
    j--;

    if (j < 0) {
      j = reviews.length - 1;
    }
    reviews[j].classList.add("reviews__item--active");
  }
});


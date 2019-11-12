var buttonCatalog = document.querySelector(".catalog");
var subMenu = document.querySelector(".flex-bottom");
var search = document.querySelector("input[type='search']");
var searchButton = document.querySelector("input[name='Найти']");
var plusButton = document.querySelector(".plus");
var sliderButton1 = document.querySelector(".slider-button-1");
var sliderButton2 = document.querySelector(".slider-button-2");
var sliderButton3 = document.querySelector(".slider-button-3");
var slide1 = document.querySelector(".js-slide-1");
var slide2 = document.querySelector(".js-slide-2");
var slide3 = document.querySelector(".js-slide-3");
var slides = [slide1, slide2, slide3];


buttonCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (subMenu.classList.contains("js-menu-show")) {
    subMenu.classList.remove("js-menu-show");
  } else {
    subMenu.classList.add("js-menu-show");
  }
});

plusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (subMenu.classList.contains("js-menu-show")) {
    subMenu.classList.remove("js-menu-show");
  } else {
    subMenu.classList.add("js-menu-show");
  }
});

search.addEventListener("focus", function (evt) {
  evt.preventDefault();
  searchButton.classList.remove("js-search-hide");
  searchButton.classList.add("js-search-show");
});

search.addEventListener("blur", function (evt) {
  evt.preventDefault();
  searchButton.classList.remove("js-search-show");
  searchButton.classList.add("js-search-hide");
});

sliderButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!slide1.classList.contains("js-slide-show")) {
    for (var i = 0; i <= slides.length - 1; i++) {
      slides[i].classList.remove("js-slide-show");
    }
    slide1.classList.add("js-slide-show");
  }
});

sliderButton2.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!slide2.classList.contains("js-slide-show")) {
    for (var i = 0; i <= slides.length - 1; i++) {
      slides[i].classList.remove("js-slide-show");
    }
    slide2.classList.add("js-slide-show");
  }
});

sliderButton3.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!slide3.classList.contains("js-slide-show")) {
    for (var i = 0; i <= slides.length - 1; i++) {
      slides[i].classList.remove("js-slide-show");
    }
    slide3.classList.add("js-slide-show");
  }
});

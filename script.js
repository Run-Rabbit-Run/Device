var buttonCatalog = document.querySelector(".catalog");
var subMenu = document.querySelector(".flex-bottom");
var search = document.querySelector("input[type='search']");
var searchButton = document.querySelector("input[name='Найти']");

buttonCatalog.addEventListener("click", function (evt) {
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
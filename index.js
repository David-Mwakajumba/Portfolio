// Navigation
const btnNavEl = document.querySelector(".navigation__mobile-nav");
const headerEl = document.querySelector(".navigation");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("navigation-open");
});

// Menu DOM Elements
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

let menuOpen = false;

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("open");
  menuOpen = true;
});

document.body.addEventListener("click", (e) => {
  if (menuOpen && !menu.contains(e.target) && e.target !== hamburger) {
    hamburger.classList.remove("open");
    menuOpen = false;
  }
});

let cl = console.log;

cl(
  "This website is made by Nathan Boquiren.\nFor more information, contact me at nathanjboquiren@gmail.com"
);

// ========== DOM Elements ==========
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");
const navContainer = document.querySelector(".nav-list-container");
const navItems = document.querySelectorAll(".nav-list-item");
const btns = document.querySelectorAll(".btn");

// ========== Variables ==========
let menuOpen = false;

// ========== Nav Hamburger Menu ==========

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

// ========== Nav Menu Animation ==========

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const underLineWidth = item.offsetWidth + 16;
    const underLineLeft = item.offsetLeft + item.offsetWidth / 2;
    navContainer.style.setProperty("--width", underLineWidth + "px");
    navContainer.style.setProperty("--left", underLineLeft + "px");
  });
  item.addEventListener("mouseleave", () => {
    navContainer.style.setProperty("--width", 0 + "px");
  });
});

// ========== Button Animation ==========

btns.forEach((btn) => {
  let hovered = false;
  btn.addEventListener("mouseover", () => {
    hovered = true;
    btn.classList.add("hover");
  });
  btn.addEventListener("mouseleave", () => {
    hovered = false;
    btn.classList.remove("hover");
    btn.classList.add("leave");
    setTimeout(() => {
      btn.classList.remove("leave");
    }, 250);
  });
});

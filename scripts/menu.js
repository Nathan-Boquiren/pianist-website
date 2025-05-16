const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");
const navContainer = document.querySelector(".nav-list-container");
const navItems = document.querySelectorAll(".nav-list-item");

const sections = document.querySelectorAll("section");

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

// ========== Dynamic Hamburger Color ==========

const observer = new IntersectionObserver(
  (entries) => {
    const visibleSections = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visibleSections.length > 0) {
      const currentSection = visibleSections[0].target;
      const computedStyle = getComputedStyle(currentSection);
      const bgImage = computedStyle.backgroundImage;
      const color =
        bgImage === "none" ? "var(--primary-clr)" : "var(--light-clr)";
      hamburger.style.setProperty("--line-clr", color);
    }
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -90% 0px",
  }
);

sections.forEach((section) => observer.observe(section));

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

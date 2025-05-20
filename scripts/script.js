let cl = console.log;

cl(
  "This website is made by Nathan Boquiren.\nFor more information, contact me at nathanjboquiren@gmail.com"
);

const btns = document.querySelectorAll(".btn");

// ========== Button Animation ==========

btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("hover");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("hover");
    btn.classList.add("leave");
    setTimeout(() => {
      btn.classList.remove("leave");
    }, 250);
  });
});

// ========== Footer Link Icon Hover Colors ==========

document.querySelectorAll(".ftr-links ul li").forEach((link) => {
  const svg = link.querySelector("a svg");
  const hoverClr = link.getAttribute("data-clr");
  svg.style.setProperty("--hover-clr", hoverClr);
});

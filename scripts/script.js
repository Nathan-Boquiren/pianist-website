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

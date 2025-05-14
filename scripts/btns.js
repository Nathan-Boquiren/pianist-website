const btns = document.querySelectorAll(".btn");

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

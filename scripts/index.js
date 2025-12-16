const menuToggle = document.querySelector("#menuToggle");
const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");
const navLi = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  menuIcon.classList.toggle("toggle-hidden");
  closeIcon.classList.toggle("toggle-hidden");
  navLi.classList.toggle("open");
});

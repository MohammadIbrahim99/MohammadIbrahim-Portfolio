window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// toggle class active untuk hamburger menu
const hamburger = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector(".hamburger-menu").onclick = (e) => {
  hamburger.classList.toggle("active");
  e.preventDefault();
};

//klik diluar hamburger menu

const hm = document.querySelector(".hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active");
  }
});

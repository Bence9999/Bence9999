/*window.addEventListener("scroll", function (e) {
  let target = document.querySelector(".scroll");
  let target2 = document.querySelector(".target2");
  //target.style.transform = "translateY(200px)";
  let scrolled = window.pageYOffset;
  target.style.transform = "translateX(" + scrolled * 1.2 + "px)";
  target2.style.transform = "translateY(" + scrolled * -0.5 + "px)";
});*/

const info = document.querySelector(".info");
const grid = document.querySelector(".grid-container");

const openInfo = function () {
  info.classList.toggle("info-opened");
};

info.addEventListener("click", openInfo);

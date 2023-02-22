let mybutton = document.getElementById("scroll-back");
const buttonMenu = document.getElementById("menu-btn"),
  menu = document.querySelector("nav > ul"),
  menuLinks = document.querySelectorAll("nav > ul li a"),
  parallax = document.getElementById("parallax");
let open = !1;
const main = document.querySelector("main"),
  phone = document.getElementById("phone");
function scrollFunction() {
  document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function toggleMenu() {
  0 == open
    ? ((menu.style.transform = "translateX(0)"),
      buttonMenu.classList.add("active"),
      (open = !0),
      window.innerWidth >= 1920 && (main.style.filter = "blur(5px)"),
      (main.style.display = "none"))
    : ((open = !1),
      (main.style.filter = "blur(0px)"),
      (main.style.display = "block"),
      (menu.style.transform = "translateX(100%)"),
      buttonMenu.classList.remove("active"));
}
function moveTo(n) {
  window.location = n;
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  menuLinks.forEach((n) => {
    n.addEventListener("click", () => {
      window.innerWidth < 1920 && toggleMenu();
    });
  });

//  show big image



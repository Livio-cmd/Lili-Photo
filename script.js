let mybutton = document.getElementById("scroll-back");
const buttonMenu = document.getElementById("menu-btn");
const menu = document.querySelector('nav > ul');
const menuLinks = document.querySelectorAll("nav > ul li a");
let open = false;
const main = document.querySelector("main");
const phone = document.getElementById('phone')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const copyPhone = () => {
  navigator.clipboard.writeText("06 14 75 15 04");
  //alert("Numéro de téléphone copié !");
  phone.innerText = "copié !";
  phone.classList.toggle('active');
  setTimeout(()=>{
    document.getElementById('phone').innerText = "06 14 75 15 04";
    phone.classList.toggle('active');
  }, 2000);
}

const resetNav = () => {
  menu.style.transform = "translateX(0)";
}


menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(window.innerWidth < 1920){
      toggleMenu();
    }
  });
});

function toggleMenu() {
  if(open == false){
    menu.style.transform = "translateX(0)";
    buttonMenu.classList.add("active");
    open = true;
    if(window.innerWidth >= 1920){
      main.style.filter = "blur(5px)";
    }
    main.style.display = "none";
  }else{
    open = false;
    main.style.filter = "blur(0px)";
    main.style.display = "block";
    menu.style.transform = "translateX(100%)";
    buttonMenu.classList.remove("active");

  }

}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function moveToAbout() {
  document.querySelector('.slider').style.opacity = "1";
  window.location.href = "./mon-histoire.html";
}

// Slider anti scroll
document.querySelector('body').style.width = "100vw";
document.querySelector('body').style.height = "100vh";
setTimeout(() => {
    if(window.location.href.includes("histoire")) {
      document.querySelector('main').style.display = "flex";
    }else {
      document.querySelector('main').style.display = "block";
   }

document.querySelector('body').style.width = "auto";
document.querySelector('body').style.height = "auto";
}, 2000);
document.querySelector('main').style.display = "none";
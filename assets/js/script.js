// =========================
// FILE: assets/js/script.js
// =========================

// Navbar Background Change

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".custom-navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// AOS Animation Init

AOS.init({
  duration:1000,
  once:true
});
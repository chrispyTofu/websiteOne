//navBar hide on scroll
var prevScrollpos = window.pageYOffset;
var small = window.matchMedia("(max-width: 900px)");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.style.backgroundColor = "#b2cede";  
      nav.style.transition = "all 0.5s";
    }
    else {
      if (small.matches) {
        nav.style.backgroundColor = "#b2cede";
      }
      else {
        nav.style.backgroundColor = "transparent";
      }
    }
    nav.style.top = "0";
  } else {
    if (small.matches) {
      nav.style.top = "-500px";
    }
    else {
      nav.style.top = "-200px";
    }
  }
  prevScrollpos = currentScrollPos;
}
window.onload = function() {
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    console.log("hello");
    hamburger.classList.toggle("is-active");
  });
}








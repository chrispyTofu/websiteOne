//navBar hide on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.style.backgroundColor = "rgba(178, 206, 222, 0.8)";
      nav.style.transition = "all 0.5s";
    }
    else {
      nav.style.backgroundColor = "transparent";
    }
    nav.style.top = "0";
  } else {
    nav.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}




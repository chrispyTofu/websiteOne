
//navBar hide on scroll
var prevScrollpos = window.pageYOffset;
var small = window.matchMedia("(max-width: 900px)");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var nav = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.style.backgroundColor = "rgba(248,250,252,0.95)";
      nav.style.transition = "all 0.5s";
    }
    else {
      if (small.matches) {
        nav.style.backgroundColor = "rgba(248,250,252,0.95)";
      }
      else {
        nav.style.backgroundColor = "transparent";


      }
    }
    nav.style.top = "0";
  } else {
    nav.style.top = "-75px";


  }
  prevScrollpos = currentScrollPos;
}
window.onload = function () {
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    console.log("hello");
    hamburger.classList.toggle("is-active");
  });
  var ham = document.getElementById("ham");
  ham.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
  });
  var ham2 = document.getElementById("ham2");
  ham2.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
  });
  var ham3 = document.getElementById("ham3");
  ham3.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
  });
  var ham4 = document.getElementById("ham4");
  ham4.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
  });

  //hide drop down menu on click
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

}











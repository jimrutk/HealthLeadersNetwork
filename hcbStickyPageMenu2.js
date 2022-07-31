window.onscroll = function() {hcbStickyMenu()};

var hcbNavbar = document.getElementById("hcb-pspagemenu");
var hcbSticky = hcbNavbar.offsetTop - 75;

function hcbStickyMenu() {
  if (window.pageYOffset >= hcbSticky) {
    hcbNavbar.classList.add("hcb-sticky")
  } else {
    hcbNavbar.classList.remove("hcb-sticky");
  }
}

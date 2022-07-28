window.onscroll = function() {hcbStickyMenu()};

var hcbNavbar = document.getElementById("hcb-pagemenu");
var hcbSticky = hcbNavbar.offsetTop;

function hcbStickyMenu() {
  if (window.pageYOffset >= hcbSticky) {
    hcbNavbar.classList.add("hcb-sticky")
  } else {
    hcbNavbar.classList.remove("hcb-sticky");
  }
}

window.onscroll = function() {hcbStickyMenu()};

/* Find the bottom of the sticky menu that is already on the page */
/* Problem is this is element in HB, different name when public vs private */
var hcbPageHeader = document.getElementById("header-view");
var hcbStickyStart = hcbPageHeader.offsetHeight;
/* Set up a string so can set the right location for top of the sticky nav menu */
var hcbSuffix = "px";
var hcbTopUpdate = hcbStickyStart + hcbSuffix;

/* Determine the amount of scrolling at which point the floating nav should be made sticky. 
This is distance from start position of nav bar to bottom of the page's sticky menu */
var hcbnavbar = document.getElementById("hcb-pspagemenu");
var hcbSticky = navbar.offsetTop - hcbStickyStart;


function hcbStickyMenu() {
  if (window.pageYOffset >= hcbSticky) {
    hcbnavbar.classList.add("hcb-sticky")
    hcbnavbar.style.top = hcbTopUpdate;

  } else {
    hcbnavbar.classList.remove("hcb-sticky");
  }
}

let hcbSlideIndex = 0;
hcbShowSlides();

function hcbShowSlides() {
  let i;
  let slides = document.getElementsByClassName("hcb-mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  hcbSlideIndex++;
  if (hcbSlideIndex > slides.length) {hcbSlideIndex = 1}    
  slides[hcbSlideIndex-1].style.display = "flex";  
  setTimeout(hcbShowSlides, 3000); // Change image every 4 seconds
}

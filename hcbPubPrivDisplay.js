hcbDisplayForContext();

function hcbDisplayForContext () {
  
  if (Hivebrite.data.jwt !== null) {
    hcbShowPrivateVersion();
  } else {
    hcbShowPublicVersion();
  }
}

function hcbShowPublicVersion() {
  var x, i;
  x = document.getElementsByClassName("hcb-publiconly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "flex";
  }
  x = document.getElementsByClassName("hcb-privateonly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
}

function hcbShowPrivateVersion() {
  var x, i;
  x = document.getElementsByClassName("hcb-privateonly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "flex";
  }
  x = document.getElementsByClassName("hcb-publiconly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
}

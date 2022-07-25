hcbDisplayForContext();

function hcbDisplayForContext () {
  /* get the Hivebrite JSON object for the page
  const hcbObj = JSON.parse(Hivebrite);

  /* document.getElementById("showJWT").innerHTML += hcbObj.data.jwt; */
  const jwtToken = getJwtToken();
  if (!jwtToken) {
    document.getElementById("showJWT").innerHTML += "have token"; 
  }
  
  if (hcbObj.data.jwt !== null) {
    hcbShowPublicVersion();
  } else {
    hcbShowPrivateVersion();
  }
}

function hcbShowPublicVersion() {
  var x, i;
  x = document.getElementsByClassName("hcb-publiconly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "block";
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
     x[i].style.display = "block";
  }
  x = document.getElementsByClassName("hcb-publiconly");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
}
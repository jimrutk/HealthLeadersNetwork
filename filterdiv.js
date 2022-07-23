filterSelection("all")
activeCurrentButton()

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("hcb-filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "hcb-show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "hcb-show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
function activeCurrentButton() {
  var btnContainer = document.getElementById("hcb-myBtnContainer");
  var btns = btnContainer.getElementsByClassName("hcb-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("hcb-active");
      current[0].className = current[0].className.replace(" hcb-active", "");
      this.className += " hcb-active";
    });
  }
}  

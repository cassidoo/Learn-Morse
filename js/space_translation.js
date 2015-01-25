var textarea = document.getElementById("space_morse");
var dash = false;
var space = false;

var timeout;
var current_code = "";

textarea.onkeydown = function(evt) {
  dash = false;
  if (evt.keyCode === 32) {
    timeout = setTimeout(function() {
      dash = true;
    }, 1000);
  }
  textarea.value = current_code;
}

textarea.onkeyup = function() {
  if(dash) {
    current_code += "-";
  }
  else {
    current_code += ".";
  }
  timeout = setTimeout(function() {
    space = true;
  }, 1000);

  if(space) {
    current_code += " ";
  }

  dash = false;
  space = false;

  textarea.value = current_code;
}

function showSpace() {
  document.getElementById("strict_transl").style.visibility= "hidden" ;
  document.getElementById("space_transl").style.visibility= "visible" ;
}

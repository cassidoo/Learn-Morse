var english = document.getElementById("translation_engl");
var morse = document.getElementById("translation_morse");
var temp_arr;

var e_values = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',',','.','?',';',':','/','-',' '];
var m_values = ['/','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','.----','..---','...--','....-','.....','-....','--...','---..','----.','-----','--..--','.-.-.-','..--..','-.-.-','---...','-..-.','-....-',''];

var num_curr_page = 0;
var num_pages = ['<p>Learn Numbers!</p><button onclick="beginNumbers()">Begin</button>',
                 '<p>Now that you have learned all of your letters, it is time to learn numbers!</p><button onclick="beginNumbers()">Cool!</button>',
                '<learn-morse letter="1" morse=".----"></learn-morse>',
                 '<learn-morse letter="2" morse="..---"></learn-morse>',
                 '<learn-morse letter="3" morse="...--"></learn-morse>',
                 '<learn-morse letter="4" morse="....-"></learn-morse>',
                 '<learn-morse letter="5" morse="....."></learn-morse>',
                 '<learn-morse letter="6" morse="-...."></learn-morse>',
                 '<learn-morse letter="7" morse="--..."></learn-morse>',
                 '<learn-morse letter="8" morse="---.."></learn-morse>',
                 '<learn-morse letter="9" morse="----."></learn-morse>',
                 '<learn-morse letter="0" morse="-----"></learn-morse>'];

function beginNumbers() {
  var numbers_section = document.getElementById("numbers");
  num_curr_page++;
  if(num_curr_page >= num_pages.length) {
    num_curr_page = 0;
  }
  numbers_section.innerHTML = " ";
  numbers_section.innerHTML = num_pages[num_curr_page];
}


var dcgbjk_curr_page = 0;
var dcgbjk_pages = ['<p>Learn dcgbjk!</p><button onclick="begindcgbjk()">Begin</button>',
'<learn-morse letter="1" morse=".----"></learn-morse>',
'<learn-morse letter="2" morse="..---"></learn-morse>',
'<learn-morse letter="3" morse="...--"></learn-morse>',
'<learn-morse letter="4" morse="....-"></learn-morse>',
'<learn-morse letter="5" morse="....."></learn-morse>',
'<learn-morse letter="6" morse="-...."></learn-morse>',
'<learn-morse letter="7" morse="--..."></learn-morse>',
'<learn-morse letter="8" morse="---.."></learn-morse>',
'<learn-morse letter="9" morse="----."></learn-morse>',
'<learn-morse letter="0" morse="-----"></learn-morse>'];

function beginDCGBJK() {
  var dcgbjk_section = document.getElementById("dcgbjk");
  dcgbjk_curr_page++;
  if(dcgbjk_curr_page >= dcgbjk_pages.length) {
    dcgbjk_curr_page = 0;
  }
  dcgbjk_section.innerHTML = " ";
  dcgbjk_section.innerHTML = dcgbjk_pages[dcgbjk_curr_page];
}

/*
english.onkeyup = function() {
  temp_arr = english.value.split("");
    morse.innerHTML = " ";
    for(var i = 0; i < temp_arr.length; i++) {
      morse.innerHTML += m_values[e_values.indexOf(temp_arr[i].toUpperCase())] + " ";
    }
}

morse.onkeyup = function() {
  temp_arr = morse.value.split(" ");
  english.innerHTML = " ";
  for(var i = 0; i < temp_arr.length; i++) {
    english.innerHTML += e_values[m_values.indexOf(temp_arr[i])];
  }
}

function showStrict() {
  document.getElementById("strict_transl").style.visibility= "visible" ;
  document.getElementById("space_transl").style.visibility= "hidden" ;
  document.getElementById("learning").style.visibility= "hidden" ;
}
*/

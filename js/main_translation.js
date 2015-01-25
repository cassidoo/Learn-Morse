var num_curr_page = 0;
var num_pages = ['<p>Learn Numbers!</p><button onclick="beginNumbers()">Begin</button>',
                 '<p>Now that you have learned all of your letters, it is time to learn numbers!</p><button onclick="beginNumbers()">Cool!</button>',
                 '<learn-morse letter="1" morse=".----" call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="2" morse="..---" call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="3" morse="...--" call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="4" morse="....-" call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="5" morse="....." call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="6" morse="-...." call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="7" morse="--..." call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="8" morse="---.." call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="9" morse="----." call="beginNumbers()"></learn-morse>',
                 '<learn-morse letter="0" morse="-----" call="beginNumbers()"></learn-morse>'];

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
var dcgbjk_pages = ['<p>Learn dcgbjk!</p><button onclick="beginDCGBJK()">Begin</button>',
                    '<learn-morse letter="D" morse="-.." call="beginDCGBJK()"></learn-morse>',
                    '<learn-morse letter="C" morse="-.-." call="beginDCGBJK()"></learn-morse>',
                    '<learn-morse letter="G" morse="--." call="beginDCGBJK()"></learn-morse>',
                    '<learn-morse letter="B" morse="-..." call="beginDCGBJK()"></learn-morse>',
                    '<learn-morse letter="J" morse=".---" call="beginDCGBJK()"></learn-morse>',
                    '<learn-morse letter="K" morse="-.-" call="beginDCGBJK()"></learn-morse>'];

function beginDCGBJK() {
  var dcgbjk_section = document.getElementById("dcgbjk");
  dcgbjk_curr_page++;
  if(dcgbjk_curr_page >= dcgbjk_pages.length) {
    dcgbjk_curr_page = 0;
  }
  dcgbjk_section.innerHTML = " ";
  dcgbjk_section.innerHTML = dcgbjk_pages[dcgbjk_curr_page];
}


var strn_curr_page = 0;
var strn_pages = ['<p>Learn STRN!</p><button onclick="beginSTRN()">Begin</button>',
                  '<learn-morse letter="S" morse="..." call="beginSTRN()"></learn-morse>',
                  '<learn-morse letter="T" morse="-" call="beginSTRN()"></learn-morse>',
                  '<learn-morse letter="R" morse=".-." call="beginSTRN()"></learn-morse>',
                  '<learn-morse letter="N" morse="-." call="beginSTRN()"></learn-morse>'];

function beginSTRN() {
  var strn_section = document.getElementById("strn");
  strn_curr_page++;
  if(strn_curr_page >= strn_pages.length) {
    strn_curr_page = 0;
  }
  strn_section.innerHTML = " ";
  strn_section.innerHTML = strn_pages[strn_curr_page];
}

var temp_arr;

var e_values = [' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',',','.','?',';',':','/','-',' '];
var m_values = ['/','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','.----','..---','...--','....-','.....','-....','--...','---..','----.','-----','--..--','.-.-.-','..--..','-.-.-','---...','-..-.','-....-',''];

function onUpEngl() {
  var english = document.getElementById("translation_engl");
  var morse = document.getElementById("translation_morse");
  temp_arr = english.value.split("");
    morse.innerHTML = " ";
    for(var i = 0; i < temp_arr.length; i++) {
      morse.innerHTML += m_values[e_values.indexOf(temp_arr[i].toUpperCase())] + " ";
    }
}

function onUpMorse() {
  var english = document.getElementById("translation_engl");
  var morse = document.getElementById("translation_morse");
  temp_arr = morse.value.split(" ");
  english.innerHTML = " ";
  for(var i = 0; i < temp_arr.length; i++) {
    english.innerHTML += e_values[m_values.indexOf(temp_arr[i])];
  }
}

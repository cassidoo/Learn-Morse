var key_button = document.getElementById("key");
var quest_space = document.getElementById("question");
var ans_space = document.getElementById("answer_space");
var answer_area = document.getElementById("answer");
var next_btn = document.getElementById("next");

var answerSpaceHTML = '<textarea id="answer_space" rows="1" cols="100" placeholder="Answer"></textarea>';

var keyShown = false;
var nextQuestion = false;
var questionNumber = 0;

var questions = ["DOG", "CAT", "SOS", "HELP", "POOP", "BATMAN", "SUNSCREEN", "-... .-.. --- --- -..", "-- ..- .-. -.. . .-.", "-.-. .- -. -. .. -... .- .-.. .. ... --"];
var answers = ["-.. --- --.", "-.-. .- -", "... --- ...", ".... . .-.. .--.", ".--. --- --- .--.", "-... .- - -- .- -.", " ... ..- -. ... -.-. .-. . . -.", "BLOOD", "MURDER", "CANNIBALISM"];

function keyDisplay() {
  if(!keyShown) {
    key_button.innerHTML = "Morse Code Key &#8659;";
    keyShown = true;
    document.getElementById("morse_code_key").style.visibility= "visible" ;
  }
  else {
    key_button.innerHTML = "Morse Code Key &#8657;";
    keyShown = false;
    document.getElementById("morse_code_key").style.visibility= "hidden" ;
  }
}

function startQuiz() {
  document.getElementById("quiz_block").style.visibility= "visible" ;
  questionNumber = 0;
  quest_space.innerHTML = "<h1>" + questions[questionNumber] + "</h1>";
}

function quizNext() {
  if(nextQuestion) {
    next_btn.innerHTML = "Check Answer";
    quest_space.innerHTML = "<h1>" + questions[questionNumber] + "</h1>";
    answer_area.innerHTML = answerSpaceHTML;
    nextQuestion = false;
  }
  else {
    if(document.getElementById("answer_space").value.toUpperCase() == answers[questionNumber]) {
      answer_area.innerHTML = "<h1>Correct!</h1><p>" + answers[questionNumber] + "</p>";
    }
    else {
      answer_area.innerHTML = "<h1>Incorrect!</h1><p>" + answers[questionNumber] + "</p>";
    }
    questionNumber++;
    nextQuestion = true;
    next_btn.innerHTML = "Next Question";
  }
}

function showLearning() {
  document.getElementById("strict_transl").style.visibility= "hidden" ;
  document.getElementById("space_transl").style.visibility= "hidden" ;
  document.getElementById("learning").style.visibility= "visible" ;
}

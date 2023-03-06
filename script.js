var timerRemaining = 100;
var timer;
var timeElement = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var nextButton =document.getElementById("nxt");
var questionNumber = 0;
var option1 = document.querySelector("#op1");
var option2 = document.querySelector("#op2");
var option3 = document.querySelector("#op3");
var option4 = document.querySelector("#op4");
var scoreDisplay = document.querySelector("#scoreDisplay")
var score = 0;
var scores = JSON.parse(localStorage.getItem("scores")) || [];

let sortedScores = scores.sort((r1, r2) => (r1.score < r2.score) ? 1 : (r1.score > r2.score) ? -1 : 0);


var totalScore = 0;

var score = 0;

var randomQuestion = questions.sort(()=>Math.random() - .5)

startButton.addEventListener("click",start);

// starts the quiz
function start() {
   document.querySelector("#start").classList.add("hide");

   setInterval(timerFunc,1000);
   document.querySelector("#que-list").classList.remove("hide");
   showQuestion(randomQuestion[questionNumber]);
}



// automatic next quesion is displayed when option is selected
function nextFunction(){


   while (document.querySelector("#answer-buttons").firstChild){
      document.querySelector("#answer-buttons").removeChild(document.querySelector("#answer-buttons").firstChild);
   };
   questionNumber++;
   console.log(questionNumber)

   if(questionNumber<questions.length){
   showQuestion(randomQuestion[questionNumber]);
   }
   else{
      document.querySelector("#que-list").classList.add("hide");
      document.querySelector("#score-container").classList.remove("hide");


   }


}

// player name initialize
document.querySelector("#submit-btn").addEventListener("click", function(event){
   event.preventDefault();
   var name = document.querySelector("#name-field").value;
   showHighScores(name);
});

viewHighScores.addEventListener("click", showHighScores);

// leader board display
function showHighScores(name){
   timerRemaining = 0;
   document.querySelector("#start").classList.add("hide");
   document.querySelector("#que-list").classList.add("hide");
   document.querySelector("#score-container").classList.add("hide");
   document.querySelector("#leaderboard").classList.remove("hide");
   if (typeof name == "string"){
      var nameScore = {
         name,score
      }
      scores.push(nameScore);
   }
   localStorage.setItem("scores", JSON.stringify(scores));

   var highScoreEl = document.getElementById("highscore");
   highScoreEl.innerHTML = "";

   for (i = 0; i < sortedScores.length; i++) {
      var div1 = document.createElement("div");
      div1.setAttribute("class", "name");
      div1.innerText = scores[i].name;
      var div2 = document.createElement("div");
      div2.setAttribute("class", "score");
      div2.innerText = scores[i].score;
      highScoreEl.appendChild(div1);
      highScoreEl.appendChild(div2);
  }
}

// restart quiz
document.querySelector("#restart-btn").addEventListener("click", function () {
   window.location.reload();
});

// clears leader board
document.querySelector("#clear-btn").addEventListener("click", function () {
   localStorage.clear();
   document.getElementById("highscore").innerHTML = "";
});

function showQuestion(i){
   document.querySelector("#ques").innerHTML = i.question;
   i.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
          button.dataset.correctOption = answer.correct;
      }
      document.querySelector("#answer-buttons").appendChild(button);
      button.addEventListener("click", selectAnswer);

  })


}

// Option selection & display result
function selectAnswer(event){
   var selectedOption = event.target;
   var correct = selectedOption.dataset.correctOption;
   if(correct){
      document.querySelector("#ans").classList.remove("hide");
      document.querySelector("#ans").innerText = "You got it Correct 😊"
      selectedOption.style.background = "green";
      score += 10;
      console.log(score);
   }
   else{
      document.querySelector("#ans").classList.remove("hide");
      document.querySelector("#ans").innerText = "Wrong Answer 😿";
      selectedOption.style.background = "red";
      timerRemaining -= 10;
   }
   setTimeout(nextFunction,1000);
   document.querySelector("#scoreDisplay").innerText = "Your score is " +score;


}





// Decrement Time
function timerFunc(){
   if(timerRemaining>0){
   timerRemaining--;

   timeElement.textContent = "Time: " +timerRemaining;


   }

}

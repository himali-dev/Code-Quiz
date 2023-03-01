var startButton = document.querySelector(".startButton");
var viewScore = document.querySelector(".viewScore");
var startquiz= document.querySelector(".startquiz");
var time = document.querySelector(".time");
var timer_sec = document.querySelector(".timer_sec");
var time_line= document.querySelector(".time_line");
var que_text = document.querySelector(".que_text");
var options_list = document.querySelector(".options_list");
var startquiz = document.querySelector(".startquiz");
var totalQue = document.querySelector(".totalQue");
var nxtBtn = document.querySelector(".nxtBtn");
var resultBox = document.querySelector(".resultBox");
var complete = document.querySelector(".complete");
var replay = document.querySelector(".replay");
var Quit = document.querySelector(".Quit");


var myQuesion = [
  ["Commonly used data types DO Not Include:", "Strings", "Booleans", "Alerts","Numbers", "3"],
  ["The condition in an if / else statement is enclosed with______.","Quotes","Curly Breacket","Parenthesis","Square Breacket"]
  ["Arrays in JavaScript can be used to store","Numbers and String","Other Arrays","Booleans","all of the above"]
  ["String values must be enclosed within ______ when being assigned to variables.","Commas","Curly Brackets","Quotes","Parenthesis"]
  ["A very useful tool used during development and debugging for printing content to the debugger is:","JavaScript","Terminal/bash","For Loops","console.log"]

]

document.getElemeentbyclassName(".startButton").addEventListener("click", myQuesion);

function myQuesion() {
  document.getElementsByClassName(".totalQue").innerHTML = que_text();
}

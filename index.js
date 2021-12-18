console.log("********************************");
console.log("Welcome to JavaScript Quiz App");
console.log("**********************************");

let readlineSync =require("readline-sync");

let userName = readlineSync.question("Enter Your Good Name ");
var score = 0;
console.log(`Welcome ${userName} Let's Play!`);

function play(question,answer){

var userQuestion = readlineSync.question(question);

if(userQuestion.toLowerCase()===answer.toLowerCase()){
  console.log("Yeah! You are Absolutly Right!");
  score++
}
else{
  console.log("oops! you just missed little");
}

console.log(`Hello ${userName} Your Score is ${score}`);
console.log("*****************************************");

}


var questions = [

{
  question: "When the JavaScript Was Invented ?",
  answer:"1995"


},

{
question:"What is the first name of JavaScript?",
answer:"LiveScript"

},

{

question:"Which year the EcmaScript Version 6 Released?",
answer:"2015"


},

{

question:"Who Developed the JavaScript?",
answer:"Brendan Eich"

},

{
question:"JavaScript oftenly abbreviated As ? ",
answer:"JS"

}


];

for(var i = 0; i<questions.length;i++){

var userQuestion = questions[i];

play(userQuestion.question,userQuestion.answer);



}

console.log(`Thanks for Playing Game ${userName}! Your Score is ${score}`);
console.log("******************************************");
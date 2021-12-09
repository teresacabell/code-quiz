var score = 0;
var questionIndex = 0;
var remainingTime = 60;

var start=document.getElementById("start");
var beginQuiz=document.getElementById("beginQuiz");
var questionsDiv=document.getElementById("questions");


var questions = [
    {
        text: "Commonly used data types do NOT include", 
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "B"
    },
    {
        text: "Arrays in Javascript can be used to store", 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "D"
    },
    {
        text: "String values must be enclosed in ______ when being assigned to variables ", 
        choices: ["square brackets", "curly brackets", "quotation marks", "parenthesis"],
        answer: "C"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger", 
        choices: ["Javascript", "terminal/bash", "for loops", "console logs"],
        answer: "D"
    },
    {
        text: "The condition in an if/then statment is enclosed in", 
        choices: ["quotation marks", "parenthesis", "curly brackets", "hashes"],
        answer: "B"
    }
]
function startGame(){
    // call the questions
    // hide startGame div
    start.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")
    callQuestion()
}

function callQuestion() {
    // put question text on page
    // append answer buttons on page
    // add onClick to answer buttons
    var questionText=document.getElementById("question-text")
    questionText.textContent=questions[questionIndex].text;
    var answersDiv=document.getElementById("answersDiv")
    answersDiv.innerHTML=""
    questions[questionIndex].choices.forEach(function(choice){
        var button=document.createElement("button");
        button.textContent=choice
        answersDiv.appendChild(button)
        button.setAttribute("data-choice", choice)
        button.onclick=evaluateAnswer;
    })

}

function evaluateAnswer() {
    var choice=this.getAttribute("data-choice")
    if (choice !== questions[questionIndex].answer) {
        console.log("wrong")
    }
    else {
        console.log("right")
    }
    questionIndex++;
    

    if (questionIndex===questions.length) {
        console.log("end game")
    }
    else {
        callQuestion()
    }
}

beginQuiz.addEventListener("click", startGame)





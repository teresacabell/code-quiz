var score = 0;
var questionIndex = 0;
var remainingTime = 60;

var start=document.getElementById("start");
var beginQuiz=document.getElementById("beginQuiz");
var questionsDiv=document.getElementById("questions");


var questions = [
    {
        text: "question1", 
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        text: "question2", 
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },
    {
        text: "question3", 
        choices: ["A", "B", "C", "D"],
        answer: "C"
    },
    {
        text: "question4", 
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        text: "question5", 
        choices: ["A", "B", "C", "D"],
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





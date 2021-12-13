var score = 0;
var questionIndex = 0;
var remainingTime = 75;
var timerId;
var start = document.getElementById("start");
var beginQuiz = document.getElementById("beginQuiz");
var questionsDiv = document.getElementById("questions");
var quizDiv = document.getElementById("quiz");
var feedbackEl = document.querySelector("#feedback")
var timerEl = document.querySelector("#timeRemaining");
var endQuizEl = document.getElementById('end');
var time; 
var scoreArray = JSON.parse(localStorage.getItem("highScores")) || []

function runTimer() {
    remainingTime--; console.log(remainingTime);
    if (remainingTime < 0) {
        remainingTime = 0;
        timerEl.innerHTML = remainingTime;
        endQuiz();
    }
    timerEl.innerHTML = remainingTime;
}

// code questions
var questions = [
    {
        text: "Commonly used data types do NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "booleans"
    },
    {
        text: "Arrays in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        text: "String values must be enclosed in ______ when being assigned to variables ",
        choices: ["square brackets", "curly brackets", "quotation marks", "parenthesis"],
        answer: "quotation marks"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger",
        choices: ["Javascript", "terminal/bash", "for loops", "console logs"],
        answer: "console logs"
    },
    {
        text: "The condition in an if/then statment is enclosed in",
        choices: ["quotation marks", "parenthesis", "curly brackets", "hashes"],
        answer: "parenthesis"
    }
]
function startGame() {
    // hide startGame div
    start.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class")
     
    // call the questions
    callQuestion()
    time = setInterval(runTimer, 1000)
}

function saveScore() {
    var initials = "";
    var scoreObj = {
        initials: initials, 
        finalScore: score * remainingTime
    }
    scoreArray.push(scoreObj)
    console.log(scoreArray)
    localStorage.setItem("highScores", JSON.stringify(scoreArray))
}

function endQuiz() {
    saveScore();
    clearInterval(time);
    questionsDiv.setAttribute('class', 'hide');  
};

function callQuestion() {
    // put question text on page
    // append answer buttons on page
    // add onClick to answer buttons
    var questionText = document.getElementById("question-text")
    questionText.textContent = questions[questionIndex].text;
    var answersDiv = document.getElementById("answersDiv")
    answersDiv.innerHTML = ""
    questions[questionIndex].choices.forEach(function (choice) {
        var button = document.createElement("button");
        button.textContent = choice
        answersDiv.appendChild(button)
        button.setAttribute("data-choice", choice)
        button.onclick = evaluateAnswer;
    })
}
function evaluateAnswer() {
    var choice = this.getAttribute("data-choice")
    if (choice !== questions[questionIndex].answer) {
        console.log("wrong")
        remainingTime -= 10;
        quizDiv.classList.add("fail")
        setTimeout(function(){
            quizDiv.classList.remove("fail")
        }, 500)
        if (remainingTime <= 0) {
            remainingTime = 0;
        }
    }
    else {
        score++;
        quizDiv.classList.add("success")
        setTimeout(function(){
            quizDiv.classList.remove("success")
        }, 500)
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz()
    }
    else {
        callQuestion()
    }
}

beginQuiz.addEventListener("click", startGame)
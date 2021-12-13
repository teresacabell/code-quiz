var highScoresArray = JSON.parse(localStorage.getItem("highScores"));
var scoreList = document.getElementById("scoresOl")


var sortedArray = highScoresArray.sort(function(a,b){
    return b.finalScore - a.finalScore
})
sortedArray.forEach(function(score){
    var li = document.createElement("li");
    li.textContent = score.initials + " " + score.finalScore
    scoreList.appendChild(li)
})



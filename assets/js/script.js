h3El = document.querySelector("#header");
h1El = document.querySelector("#top");
pEl = document.querySelector("#p");
start = document.querySelector("#start");
container = document.querySelector("#container");
choicesEl = document.createElement("ol");
li1 = document.createElement("li");
li2 = document.createElement("li");
li3 = document.createElement("li");
li4 = document.createElement("li");
li1.setAttribute("class","choice");
li2.setAttribute("class","choice");
li3.setAttribute("class","choice");
li4.setAttribute("class","choice");
message = document.querySelector("#message");
finishEl = document.createElement("button");
finishEl.textContent = "Finish";
container.appendChild(finishEl);
finishEl.setAttribute("style", "display: none;");
var secondsLeft = 75;
var timerInterval;
var count = 0;

function startGame(event){
    event.preventDefault();
    start.setAttribute("style","display: none;");
    h1El.textContent = "Question 1";
    pEl.textContent = "Which of the following is NOT one of the JavaScript primitive data types?";
    container.appendChild(choicesEl);
    choicesEl.appendChild(li1);
    choicesEl.appendChild(li2);
    choicesEl.appendChild(li3);
    choicesEl.appendChild(li4);
    li1.textContent = "Character";
    li2.textContent = "Boolean";
    li3.textContent = "String";
    li4.textContent = "Number";

    timerInterval = setInterval(function(){
        secondsLeft--;
         h3El.textContent = "🕓 " + secondsLeft + " seconds left";
         if(secondsLeft === 0) {
            finalScore();
        }
    }, 1000);
}

start.addEventListener("click", startGame);

choicesEl.addEventListener("click", function(event) {
    li1.setAttribute("class","correct");
    var element = event.target;
    if(element.matches(".correct")) {
        message.textContent = "✅ Correct!";
        count++;
    }
    else if(element.matches(".choice")) {
        message.textContent = "❌ Incorrect!";
        secondsLeft = secondsLeft - 5;
    }
    question2();
});

function question2() {
    h1El.textContent = "Question 2";
    pEl.textContent = "What is the expression 'x++' short for?";
    li1.textContent = "x = 2x";
    li2.textContent = "x = x + 1";
    li3.textContent = "x = x + 2";
    li4.textContent = "This is not a valid expression";
    li1.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        question3();
    })
}

function question3() {
    h1El.textContent = "Question 3";
    pEl.textContent = "Which operator should be used to test strict equality?";
    li1.textContent = "!==";
    li2.textContent = "=";
    li3.textContent = "==";
    li4.textContent = "===";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        question4();
    })
}

function question4() {
    h1El.textContent = "Question 4";
    pEl.textContent = "Which of the following methods is used to remove the first element from an array?";
    li1.textContent = "shift()";
    li2.textContent = "pop()";
    li3.textContent = "push()";
    li4.textContent = "replace()";
    li4.setAttribute("class","choice");
    li1.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        question5();
    })
}

function question5() {
    h1El.textContent = "Question 5";
    pEl.textContent = "Which of the following describes the functionality of the Math.random() method?";
    li1.textContent = "Returns a random number between 1 and 99 (exclusive)";
    li2.textContent = "Returns a random number between 1 and 99 (inclusive)";
    li3.textContent = "Returns a random number between 0 and 1 (exclusive)";
    li4.textContent = "Returns a random number between 0 and 1 (inclusive)";
    li1.setAttribute("class","choice");
    li3.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        question6();
    })
}

function question6() {
    h1El.textContent = "Question 6";
    pEl.textContent = "Which of the following is proper syntax to invoke a function when an element is clicked on?";
    li1.textContent = "element.Click(function())";
    li2.textContent = "element.addEventListener('click', function())";
    li3.textContent = "element.function = onClick";
    li4.textContent = "element.addEvent('click', function())";
    li3.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        question7();
    })
}

function question7() {
    h1El.textContent = "Question 7";
    pEl.textContent = "Which of the following converts a JSON string into a JavaScript object?";
    li1.textContent = "JSON.extract()";
    li2.textContent = "JSON.destringify()";
    li3.textContent = "JSON.stringify()";
    li4.textContent = "JSON.parse()";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "✅ Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "❌ Incorrect!";
        }
        finishEl.setAttribute("style", "display: block;");
    })
    finishEl.addEventListener("click", finalScore);
}

function finalScore() {
    clearInterval(timerInterval);
    h3El.textContent = "";
    h1El.textContent = "Quiz Completed!";
    pEl.textContent = "Your final score: " + count;
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
    finishEl.remove();
    message.textContent = "";
    
    formEl = document.createElement("form");
    labelEl = document.createElement("label");
    labelEl.textContent = "Enter initials:"
    labelEl.setAttribute("for","initials");
    inputEl = document.createElement("input");
    inputEl.setAttribute("name","initials");
    submitEl = document.createElement("button");
    submitEl.textContent = "Submit";
    container.appendChild(formEl);
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(submitEl);

    submitEl.addEventListener("click", function () {
        inputEl.value = inputEl.value.toUpperCase();
        let currentScore = [ {
            name: inputEl.value,
            score: count
        }
        ]
        let storedScores = JSON.parse(localStorage.getItem("highScores"));
        if (storedScores !== null) {
            storedScores.push(currentScore[0]);
        }
        else {
            storedScores = currentScore;
        }
        localStorage.setItem("highScores", JSON.stringify(storedScores));
    })
}

h3El.addEventListener("click", highScores);

function highScores (event) {
    event.preventDefault;
    h3El.textContent = "";
    h1El.textContent = "High Scores:";
    pEl.remove();
    start.remove();
    scoresList = document.createElement("ol");
    container.appendChild(scoresList);

    let storedScores = JSON.parse(localStorage.getItem("highScores"));
    if(storedScores !== null) {
        storedScores.sort(function(a, b){return b.score-a.score});
        for(var i=0; i<storedScores.length; i++) {
            var pastScore = storedScores[i];
            var displayScore = document.createElement("li");
            displayScore.setAttribute("class","score");
            displayScore.textContent = pastScore.name + " " + pastScore.score;
            scoresList.appendChild(displayScore);
        }
    }


    clear = document.createElement("button");
    playAgain = document.createElement("button");
    clear.textContent = "Clear Scores";
    playAgain.textContent = "Play Again!";
    container.appendChild(clear);
    container.appendChild(playAgain);
    clear.setAttribute("class","button");
    playAgain.setAttribute("class","button");

    clear.addEventListener("click", function() {
        localStorage.clear();
        scoresList.innerHTML = "";
    })

    playAgain.addEventListener("click", function () {
        location.reload();
    })
}

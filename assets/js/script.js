//top left corner
h3El = document.querySelector("#header");
//title
h1El = document.querySelector("#top");
//text within box
pEl = document.querySelector("#p");
//start btn
start = document.querySelector("#start");
//purple section
sectionEl = document.querySelector("#section");
//container outlined in dbl border
container = document.querySelector("#container");
//list of choices for questions
choicesEl = document.createElement("ol");
li1 = document.createElement("li");
li2 = document.createElement("li");
li3 = document.createElement("li");
li4 = document.createElement("li");
li1.setAttribute("class","choice");
li2.setAttribute("class","choice");
li3.setAttribute("class","choice");
li4.setAttribute("class","choice");
//message displayed on bottom section of page
message = document.querySelector("#message");
//set timer to 75 seconds
var secondsLeft = 75;
var timerInterval;
//set initial count of questions correctly answered to 0
var count = 0;
//btns to proceed through questions
var toQ2 = document.createElement("button");
var toQ3 = document.createElement("button");
var toQ4 = document.createElement("button");
var toQ5 = document.createElement("button");
var toQ6 = document.createElement("button");
var toQ7 = document.createElement("button");
//btn to complete quiz
var finishBtn = document.createElement("button");
finishBtn.textContent = "Finish";

//starts the game and displays question 1
function startGame(event){
    event.preventDefault();
    //remove start btn
    start.remove();
    //add styling and text content to 'Next' btn
    toQ2.setAttribute("class", "advance-btn");
    toQ2.textContent = "Next";
    //display question 1 and answer choices
    h1El.textContent = "Question 1";
    pEl.textContent = "Which of the following is NOT one of the JavaScript primitive data types?";
    container.appendChild(choicesEl);
    choicesEl.appendChild(li1);
    choicesEl.appendChild(li2);
    choicesEl.appendChild(li3);
    choicesEl.appendChild(li4);
    section.appendChild(toQ2);
    li1.textContent = "Character";
    li2.textContent = "Boolean";
    li3.textContent = "String";
    li4.textContent = "Number";
    //mark choice 1 as correct for this question
    li1.setAttribute("class","correct");
    //start timer
    timerInterval = setInterval(function(){
        secondsLeft--;
        //display timer
         h3El.textContent = "🕓 " + secondsLeft + " seconds left";
         //end quiz when timer reaches 0
         if(secondsLeft === 0) {
            finalScore();
        }
    }, 1000);
}

start.addEventListener("click", startGame);

//runs each time a question is answered
choicesEl.addEventListener("click", function(event) {
    var element = event.target;
    //if correct choice is answered adds to score
    if(element.matches(".correct")) {
        message.textContent = "✅ Correct!";
        count++;
    }
    //if incorrect choice is selected then 5 seconds taken off timer
    else if(element.matches(".choice")) {
        message.textContent = "❌ Incorrect!";
        secondsLeft = secondsLeft - 5;
    }
});

function question2(event) {
    event.preventDefault();
    //display question 2
    h1El.textContent = "Question 2";
    pEl.textContent = "What is the expression 'x++' short for?";
    li1.textContent = "x = 2x";
    li2.textContent = "x = x + 1";
    li3.textContent = "x = x + 2";
    li4.textContent = "This is not a valid expression";
    li1.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ2.remove();
    toQ3.setAttribute("class", "advance-btn");
    toQ3.textContent = "Next";
    section.appendChild(toQ3);
}

toQ2.addEventListener("click", question2);

function question3(event) {
    event.preventDefault();
    //display question 3
    h1El.textContent = "Question 3";
    pEl.textContent = "Which operator should be used to test strict equality?";
    li1.textContent = "!==";
    li2.textContent = "=";
    li3.textContent = "==";
    li4.textContent = "===";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ3.remove();
    toQ4.setAttribute("class", "advance-btn");
    toQ4.textContent = "Next";
    section.appendChild(toQ4);
}

toQ3.addEventListener("click", question3);

function question4(event) {
    event.preventDefault();
    //display question 4
    h1El.textContent = "Question 4";
    pEl.textContent = "Which of the following methods is used to remove the first element from an array?";
    li1.textContent = "shift()";
    li2.textContent = "pop()";
    li3.textContent = "push()";
    li4.textContent = "replace()";
    li4.setAttribute("class","choice");
    li1.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ4.remove();
    toQ5.setAttribute("class", "advance-btn");
    toQ5.textContent = "Next";
    section.appendChild(toQ5);
}

toQ4.addEventListener("click", question4);

function question5(event) {
    event.preventDefault();
    //display question 5
    h1El.textContent = "Question 5";
    pEl.textContent = "Which of the following describes the functionality of the Math.random() method?";
    li1.textContent = "Returns a random number between 1 and 99 (exclusive)";
    li2.textContent = "Returns a random number between 1 and 99 (inclusive)";
    li3.textContent = "Returns a random number between 0 and 1 (exclusive)";
    li4.textContent = "Returns a random number between 0 and 1 (inclusive)";
    li1.setAttribute("class","choice");
    li3.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ5.remove();
    toQ6.setAttribute("class", "advance-btn");
    toQ6.textContent = "Next";
    section.appendChild(toQ6);
}

toQ5.addEventListener("click", question5);

function question6(event) {
    event.preventDefault();
    //display question 6
    h1El.textContent = "Question 6";
    pEl.textContent = "Which of the following is proper syntax to invoke a function when an element is clicked on?";
    li1.textContent = "element.Click(function())";
    li2.textContent = "element.addEventListener('click', function())";
    li3.textContent = "element.function = onClick";
    li4.textContent = "element.addEvent('click', function())";
    li3.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ6.remove();
    toQ7.setAttribute("class", "advance-btn");
    toQ7.textContent = "Next";
    section.appendChild(toQ7);
}

toQ6.addEventListener("click", question6);

function question7(event) {
    event.preventDefault();
    //display question 7
    h1El.textContent = "Question 7";
    pEl.textContent = "Which of the following converts a JSON string into a JavaScript object?";
    li1.textContent = "JSON.extract()";
    li2.textContent = "JSON.destringify()";
    li3.textContent = "JSON.stringify()";
    li4.textContent = "JSON.parse()";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    //clear feedback message from previous question
    message.textContent = "";
    //remove previous btn and create new one
    toQ7.remove();
    finishBtn.setAttribute("class", "advance-btn");
    finishBtn.textContent = "Finish";
    section.appendChild(finishBtn);
}

toQ7.addEventListener("click", question7);
//runs when all questions are answered or timer reaches 0
function finalScore(event) {
    event.preventDefault();
    //clear timer interval and display
    clearInterval(timerInterval);
    h3El.style.display = "none";
    //display quiz completed message
    h1El.textContent = "Quiz Completed!";
    pEl.textContent = "Your final score: " + count;
    //clear answer choices and 'Finish' btn
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
    finishBtn.remove();
    //display feedback message based on score
    if(count > 5) {
        message.textContent = "Great job! 🏆";
    }
    else if(count < 4) {
        message.textContent = "Better luck next time... 👎"
    }
    else {
        message.textContent = "Getting there! 🤔"
    }
    //create form to enter intials to be associated with score
    formEl = document.createElement("form");
    labelEl = document.createElement("label");
    labelEl.textContent = "Enter initials:"
    labelEl.setAttribute("for","initials");
    inputEl = document.createElement("input");
    inputEl.setAttribute("name","initials");
    //submit btn
    submitEl = document.createElement("button");
    submitEl.setAttribute("class", "button");
    submitEl.setAttribute("id", "submit-btn");
    submitEl.textContent = "Submit";
    container.appendChild(formEl);
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(submitEl);
    //saves high score to local storage
    submitEl.addEventListener("click", function () {
        //converts initials to uppercase
        inputEl.value = inputEl.value.toUpperCase();
        //stores current score and initials
        //store in array so that future scores can be added (if this is the first attempt)
        let currentScore = [ {
            name: inputEl.value,
            score: count
        }
        ]
        //retrieve previously saved scores
        let storedScores = JSON.parse(localStorage.getItem("highScores"));
        //if previously saved scores exist add current score
        if (storedScores !== null) {
            storedScores.push(currentScore[0]);
        }
        //if no previously saved scores
        else {
            storedScores = currentScore;
        }
        //save to local storage
        localStorage.setItem("highScores", JSON.stringify(storedScores));
        //reload page
        location.reload();
    })
}

finishBtn.addEventListener("click", finalScore);
//displays high scores page
function highScores (event) {
    event.preventDefault;
    //clears 'View High Scores'
    h3El.style.display = "none";
    //adds title and clears unneeded elements
    h1El.textContent = "High Scores:";
    pEl.remove();
    start.remove();
    //creates place to add scores
    scoresList = document.createElement("ol");
    //hides dbl border
    container.style.borderColor = "#5900b3";
    container.appendChild(scoresList);
    //retrieve stored scores
    let storedScores = JSON.parse(localStorage.getItem("highScores"));
    //if stored scores exist
    if(storedScores !== null) {
        //sort scores from highest to lowest
        storedScores.sort(function(a, b){return b.score-a.score});
        for(var i=0; i<storedScores.length; i++) {
            var pastScore = storedScores[i];
            var displayScore = document.createElement("li");
            //give class used for styling
            displayScore.setAttribute("class","score");
            //display score
            displayScore.textContent = [i+1] + ". " + pastScore.name + " - " + pastScore.score + " point(s)";
            scoresList.appendChild(displayScore);
        }
    }
    //btn to clear scores
    clear = document.createElement("button");
    clear.textContent = "Clear Scores";
    clear.setAttribute("class","button");
    clear.setAttribute("id", "clear-btn");
    //btn to play again
    playAgain = document.createElement("button");
    playAgain.textContent = "Play Again!";
    playAgain.setAttribute("class","button");
    playAgain.setAttribute("id", "play-again");

    container.appendChild(clear);
    container.appendChild(playAgain);
    //clear scores from local storage and clear from display
    clear.addEventListener("click", function() {
        localStorage.clear();
        scoresList.innerHTML = "";
    })
    //reload page to play game again
    playAgain.addEventListener("click", function () {
        location.reload();
    })
}

h3El.addEventListener("click", highScores);

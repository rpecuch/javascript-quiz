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
var secondsLeft = 75;
var count = 0;

start.addEventListener("click", function() {
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

    var timerInterval = setInterval(function(){
        secondsLeft--;
         h3El.textContent = "🕓 " + secondsLeft + " seconds left";
         if(secondsLeft === 0) {
            clearInterval(timerInterval);
            h3El.textContent = "";
            finalScore();
        }
    }, 1000);
});

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
    li4.textContent = "Returns a random number between 0 and 1 (inclusive";
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

//need interval to be cleared when question 7 completed

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
        finalScore();
    })
}

function finalScore() {
    h1El.textContent = "Quiz Completed!";
    pEl.textContent = "Your final score: " + count;
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
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
        //direct to high scores page
    });
}

//need count stored and retrieved

//add event listener to directly view list of high scores
h3El.addEventListener("click", function() {
    console.log("highscore");
    h3El.textContent = "Go back";
    h1El.textContent = "High Scores";
    pEl.remove();
    //either change text on button or make new button
});

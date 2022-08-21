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

//add event listener to directly view list of high scores
h3El.addEventListener("click", function() {
    console.log("highscore");
});

start.addEventListener("click", function() {
    start.setAttribute("style","display: none;");
    h1El.textContent = "Question 1";
    pEl.textContent = "Insert question here?";
    container.appendChild(choicesEl);
    choicesEl.appendChild(li1);
    choicesEl.appendChild(li2);
    choicesEl.appendChild(li3);
    choicesEl.appendChild(li4);
    li1.textContent = "Correct Choice";
    li2.textContent = "Choice 2";
    li3.textContent = "Choice 3";
    li4.textContent = "Choice 4";
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
         h3El.textContent = secondsLeft;
         if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //need to direct to final score page when time is up
        }
    }, 1500);
});

choicesEl.addEventListener("click", function(event) {
    li1.setAttribute("class","correct");
    var element = event.target;
    if(element.matches(".correct")) {
        message.textContent = "Correct!";
    }
    else if(element.matches(".choice")) {
        message.textContent = "Incorrect!";
        secondsLeft = secondsLeft - 5;
    }
    question2();
})

//debug:appears to go down by more than 5 seconds when incorrect answer chosen. also on q4 and q6 and q7 time goes down a bunch when correct answer is chosen
//also interval is not being cleared when time reaches 0

function question2() {
    h1El.textContent = "Question 2";
    pEl.textContent = "Insert question 2 here?";
    li1.textContent = "Choice";
    li2.textContent = "Correct Choice";
    li3.textContent = "Choice 3";
    li4.textContent = "Choice 4";
    li1.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        question3();
    })
}

function question3() {
    h1El.textContent = "Question 3";
    pEl.textContent = "Insert question 3 here?";
    li1.textContent = "Choice1";
    li2.textContent = "Choice2";
    li3.textContent = "Choice 3";
    li4.textContent = "Correct Choice 4";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        question4();
    })
}

function question4() {
    h1El.textContent = "Question 4";
    pEl.textContent = "Insert question 4 here?";
    li1.textContent = "Correct Choice1";
    li2.textContent = "Choice2";
    li3.textContent = "Choice 3";
    li4.textContent = "Choice 4";
    li4.setAttribute("class","choice");
    li1.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        question5();
    })
}

function question5() {
    h1El.textContent = "Question 5";
    pEl.textContent = "Insert question 5 here?";
    li1.textContent = "Choice1";
    li2.textContent = "Choice2";
    li3.textContent = "Correct Choice 3";
    li4.textContent = "Choice 4";
    li1.setAttribute("class","choice");
    li3.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        question6();
    })
}

function question6() {
    h1El.textContent = "Question 6";
    pEl.textContent = "Insert question 6 here?";
    li1.textContent = "Choice1";
    li2.textContent = "Correct Choice2";
    li3.textContent = "Choice 3";
    li4.textContent = "Choice 4";
    li3.setAttribute("class","choice");
    li2.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        question7();
    })
}

function question7() {
    h1El.textContent = "Question 7";
    pEl.textContent = "Insert question 7 here?";
    li1.textContent = "Choice1";
    li2.textContent = "Choice2";
    li3.textContent = "Choice 3";
    li4.textContent = "Correct Choice 4";
    li2.setAttribute("class","choice");
    li4.setAttribute("class","correct");
    choicesEl.addEventListener("click", function(event) {
        var element = event.target;
        if(element.matches(".correct")) {
            message.textContent = "Correct!";
        }
        else if(element.matches(".choice")) {
            message.textContent = "Incorrect!";
            secondsLeft = secondsLeft - 5;
        }
        finalScore();
    })
}

function finalScore() {
    h1El.textContent = "Quiz Completed!";
    pEl.textContent = "Your final score: "; //will need to have score loaded
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
    message.textContent = "";
    //append form to fill out
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

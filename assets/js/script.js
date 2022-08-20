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

start.addEventListener("click", function() {
    h1El.textContent = "Question 1";
    pEl.textContent = "Insert question here?";
    container.appendChild(choicesEl);
    choicesEl.appendChild(li1);
    choicesEl.appendChild(li2);
    choicesEl.appendChild(li3);
    choicesEl.appendChild(li4);
    li1.textContent = "Choice 1";
    li2.textContent = "Choice 2";
    li3.textContent = "Choice 3";
    li4.textContent = "Choice 4";
    //also need to hide the start quiz button
    var secondsLeft = 75;
    var timerInterval = setInterval(function(){
        secondsLeft--;
         h3El.textContent = secondsLeft;
         if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1500);
});

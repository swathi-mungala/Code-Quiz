var startEl = document.getElementById('start');
var timeEl = document.getElementById('time');
var timer;
var timeLeft = 150;
var index = 0;
var startScreenEl = document.getElementById('start-screen');
var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var choicesEl = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var initialsEl = document.getElementById('initials');
var submitEl = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');


function startFunction() {
    // Hide start screen
    startScreenEl.setAttribute("class","hide");
    
    // Show time left
    timeEl.textContent = timeLeft;

    // start timer
    timer = setInterval(intervalHandler, 1000);

    // Show questions screen
    questionsEl.removeAttribute("class");

    // Show question
    showNextQuestion();
}

function showNextQuestion() {
    // getting question form questions array
    var question = questions[index];
    // dispaly question to the user
    questionTitleEl.textContent = question.question;

    // clear previous options 
    choicesEl.innerHTML = "";

    // loop over all options
    question.options.forEach(function(choice, i){
        var btn = document.createElement('button');
        btn.setAttribute("class","choice");
        btn.setAttribute("value",choice);
        btn.textContent = i+1+". " + choice;
        choicesEl.appendChild(btn);
    })
    // getting all the choices
    choiceButtonEl = document.querySelectorAll('.choice');
    // attaching event to each option
    choiceButtonEl.forEach(function(choice, i){
        choiceButtonEl[i].addEventListener('click', optionHandler);
    })

}

function optionHandler(event) {
    // To be done
    // correct or wrong 
    console.log(event.target.value);
}

function intervalHandler() {
    // decrement time and show updated time
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft <= 0) {
        endQuiz();
        
    }
}

function endQuiz() {
    // To be done
    // get initials
    // stop timer, show final scores
    // get initials and store in local storage
}

startEl.addEventListener('click', startFunction); 
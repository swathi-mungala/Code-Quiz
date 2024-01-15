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
    var question = questions[index];
    questionTitleEl.textContent = question.question;
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
}

startEl.addEventListener('click', startFunction); 
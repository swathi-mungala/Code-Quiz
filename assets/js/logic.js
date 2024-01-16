var startEl = document.getElementById('start');
var timeEl = document.getElementById('time');
var timer;
var questionTimer;
var timePenalty = 15;
var timeLeft = 75;
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
    // declaring feedback element
    feedbackEl.innerHTML = "";

    clearInterval(questionTimer);

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
        choiceButtonEl[i].addEventListener('click', function(event){
            optionHandler(event, question);
        });
            
    });

    // Set up a timer for each question
    questionTimer = setTimeout(function() {
        // Move to the next question if no option is selected within the time limit 15 seconds
        index++;
        showNextQuestion();
    }, 15000); 

}

function optionHandler(event, question) {



    // correct or wrong 
    feedbackEl.setAttribute("class", "feedback")
    var currentChoice = event.target.value;
    if(currentChoice == question.answer){
        feedbackEl.textContent = "Correct";
    }
    else {
        feedbackEl.textContent = "Wrong";
        // Clear the timer when an option is wrong
        //clearTimeout(questionTimer);

        // Reduce 15 seconds from the total time only if the answer is correct
        timeLeft -= timePenalty;
        if (timeLeft < 0) {
            timeLeft = 0; // Ensure timeLeft is not negative
        }
        timeEl.textContent = timeLeft;
    }

    // Check if the question was answered before the timer expiration
    // if (questionTimer) {
    //     // Reduce 15 seconds from the total time
    //     timeLeft -= timePenalty;
    //     if (timeLeft < 0) {
    //         timeLeft = 0; // Ensure timeLeft is not negative
    //     }
    //     timeEl.textContent = timeLeft;
    // }

    // Move to the next question
    index++;

    // Check if there are more questions
    if (index < questions.length) {
        // If there are more questions, show the next one
        setTimeout(showNextQuestion, 1000); // You can adjust the delay as needed
    } else {
        // If there are no more questions, end the quiz or perform any final actions
        endQuiz();
    }
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
    clearInterval(timer);

    // Hide questions and feedback elements
    questionsEl.setAttribute("class", "hide");
    feedbackEl.textContent = "";

    // Show the end screen
    endScreenEl.removeAttribute("class");

    // Display the final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = "Your Final Score: " + timeLeft;

    // Handle the submission of initials
    submitEl.addEventListener('click', function() {
        var initials = initialsEl.value.trim(); // Get the initials from the input field
        // Store the initials and score in local storage or perform any other desired action
        console.log("Initials: " + initials + ", Score: " + timeLeft);
    });
}

startEl.addEventListener('click', startFunction); 
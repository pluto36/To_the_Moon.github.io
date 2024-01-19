var score = 0;
var wrongAnswers = 0;


//Start Quiz
function startQuiz() {
    document.getElementById("quiz-start-section").style.display = "none";
    document.getElementById("question-box-1").style.display = "block";
}

//Wrong Answer
function wrongAnswer() {
    document.getElementById("wrong-answer").style.display = "block";
    setTimeout(function() {
        document.getElementById('wrong-answer').style.display = 'none';
    }, 1500);
    wrongAnswers++;
    console.log(wrongAnswers);
}

//Question One
function questionOneRight() {
    document.getElementById("question-box-1").style.display = "none";
    document.getElementById("question-box-2").style.display = "block";
    score++;
    console.log(score);
}

//Question Two
function questionTwoRight() {
    document.getElementById("question-box-2").style.display = "none";
    document.getElementById("question-box-3").style.display = "block";
    score++;
    console.log(score);
}

//Question Three
function questionThreeRight() {
    document.getElementById("question-box-3").style.display = "none";
    document.getElementById("question-box-4").style.display = "block";
    score++;
    console.log(score);
}

//Question Four
function questionFourRight() {
    document.getElementById("question-box-4").style.display = "none";
    document.getElementById("question-box-5").style.display = "block";
    score++;
    console.log(score);
}

//Question Five
function questionFiveRight() {
    document.getElementById("question-box-5").style.display = "none";
    score++;
    console.log(score);
    document.getElementById("finished-quiz").style.display = "block";
    document.getElementById("finished-quiz").innerHTML = "Good Job! You got " + score + " out of 5! You answered wrong " + wrongAnswers + " times."
}
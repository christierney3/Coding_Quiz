//Declare elements
var startButton = document.getElementById('start-button');
var timerEl = document.getElementById('timer');
var timerDisplayEl = document.getElementById('timer-display');
var quizContainer = document.querySelector('.quiz');
var quizIntro = document.getElementById('quiz-intro');
var questionText = document.getElementById('question-text');
var answerText = document.getElementById('answer-text');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var submitButton = document.getElementById('submit-btn')
var footer = document.querySelector('.footer')
var scoreText = document.querySelector('.score')
var userForm = document.getElementById('user-info')
var initialsInput = document.getElementById('initials')
var highscoreCard = document.getElementById('highscore')
//Create array for questions
const allQuestions = [{
  question: 'The sky is ___',
  A: 'Green',
  B: 'Blue',
  C: 'a figment of our imagination',
  D: 'All of the above',
  correctAnswer: 'B'},
  {
  question: 'What is the best flavor of ice cream?',
  A: 'Vanilla',
  B: 'Chocolate',
  C: 'Coffee',
  D: 'Mint Chip',
  correctAnswer: 'C'},
  {
  question: 'What can you do with Javascript?',
  A: 'Animate Websites',
  B: 'Create applications',
  C: 'Make Games',
  D: 'All of the above',
  correctAnswer: 'D'},
  {
  question: 'Which Javascript library could have been used to aid in building this quiz?',
  A: 'New York Public Library',
  B: 'Library of Congress',
  C: 'Bootstrap',
  D: 'JQuery',
  correctAnswer: 'D'},
  {
  question: 'Who created Javascript?',
  A: 'Mark Zuckerberg',
  B: 'Tom from Myspace',
  C: 'Brendan Eich',
  D: 'King Henry VII',
  correctAnswer: 'C'}
]
//Set global variable for i
let i = 0;
var lastQ = allQuestions.length - 1;
var currentQuestion = 0;
var count = 0;
let score = 0;
let timeLeft = 60;
let scoreCount = 0;
// var initials = ''
// var result = {initials: initials, scores: scoreCount}
// let highscore = []
// var savedScores = localStorage.getItem('highscore') || '[]';
// var highscores = [JSON.parse(savedScores), result].sort((a, b) => b.scores- a.scores).slice(0,5)

// localStorage.setItem('highscore', JSON.stringify(highscores))

renderHighscore();
// Set local storage to get info from initials and score to set to highscore div
// I realize this isn't working but have been stuck for hours on it
function renderHighscore() {
  var initials = localStorage.getItem('initials');
  var highscore = localStorage.getItem('highscore', scoreCount);
  var result = [initials, highscore]

  highscoreCard.textContent = result;

  
}

//set function to show the questions
function renderQuestions() {
  let q = allQuestions[currentQuestion];

  questionText.innerHTML = '<p>'+ q.question +'</p>';
  choiceA.innerHTML = q.A;
  choiceB.innerHTML = q.B;
  choiceC.innerHTML = q.C;
  choiceD.innerHTML = q.D;
}
//set function to hide previous content when renderQuestions is called on
function beginQuiz() {
    answerText.style.display =('block')
    quizContainer.style.display = 'block';
    quizIntro.replaceWith(quizContainer);
    startButton.style.display = 'none';
    footer.style.display = 'block';
    renderQuestions();
  }
//add event listener to the start button to begin quiz and timer
startButton.addEventListener('click', function countdown() {
    beginQuiz();
      timerEl.style.display = 'block';
    
      var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerDisplayEl.textContent = timeLeft;
          timeLeft--;
        } else if (timeLeft === 1) {
          timerDisplayEl.textContent = timeLeft;
          timeLeft--;
        } else {
          timerDisplayEl.textContent = '';
          clearInterval(timeInterval);
        }
      }, 1000);
  })
//set function to have timer and score react to right or wrong answers
  function checkAnswer(answer){
    if (answer == allQuestions[currentQuestion].correctAnswer){
        // answer is correct
        score++;
    }else{
        // answer is wrong
        // subtract time off timer
        timeLeft -= 4
    }
    count = 0;
    if(currentQuestion < lastQ){
        currentQuestion++;
        renderQuestions();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}


console.log(score)

//set function to show finals score and hide previous content
function scoreRender(){
  submitButton.style.display = 'block'
  highscoreCard.style.display = 'block';
  userForm.style.display = 'block';
  questionText.style.display = 'none';
  answerText.style.display = 'none';
  scoreText.style.display = 'block';
// set equation so score is based on both time and correct answers
  var scoreCount = Math.round(100 * score/allQuestions.length * timeLeft);
  scoreText.innerHTML = '<p>'+ scoreCount+ '</p>';

}


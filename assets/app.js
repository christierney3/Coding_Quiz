//Declare elements
var startButton = document.getElementById('start-button');
var timerEl = document.getElementById('timer');
var timerDisplayEl = document.getElementById('timer-display');
var quizContainer = document.querySelector('.quiz');
var quizIntro = document.getElementById('quiz-intro');
var questionText = document.getElementById('question-text');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var nextButton = document.querySelector('.next-btn')
var footer = document.querySelector('.footer')
//Create array for questions
const allQuestions = [{
  question: 'The sky is ___',
  A: 'Green',
  B: 'Blue',
  C: 'a figment of our imagination',
  D: 'All of the above',
  correctAnswer: 'b'},
  {
  question: 'What is the best flavor of ice cream?',
  A: 'Vanilla',
  B: 'Chocolate',
  C: 'Coffee',
  D: 'Mint Chip',
  correctAnswer: 'c'},
  {
  question: 'What can you do with Javascript?',
  A: 'Animate Websites',
  B: 'Create applications',
  C: 'Make Games',
  D: 'All of the above',
  correctAnswer: 'd'},
  {
  question: 'Which Javascript library could have been used to aid in building this quiz?',
  A: 'New York Public Library',
  B: 'Library of Congress',
  C: 'Bootstrap',
  D: 'JQuery',
  correctAnswer: 'd'},
  {
  question: 'Who created Javascript?',
  A: 'Mark Zuckerberg',
  B: 'Tom from Myspace',
  C: 'Brendan Eich',
  D: 'King Henry VII',
  correctAnswer: 'c'},
]
//Set global variable for i
let i = 0;
var lastQ = allQuestions.length - 1;
var currentQuestion = 0;
var count = 0;
var score = 0;
var timeLeft = 60;

function renderQuestions() {
  let q = allQuestions[currentQuestion];

  questionText.innerHTML = '<p>'+ q.question +'</p>';
  choiceA.innerHTML = q.A;
  choiceB.innerHTML = q.B;
  choiceC.innerHTML = q.C;
  choiceD.innerHTML = q.D;
}

function beginQuiz() {
    quizContainer.style.display = 'block';
    quizIntro.replaceWith(quizContainer);
    startButton.style.display = 'none';
    footer.style.display = 'block';
    renderQuestions();
  }

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

  function checkAnswer(answer){
    if( answer == allQuestions[currentQuestion].correctAnswer){
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
        clearInterval(timeInterval);
        scoreRender();
    }
}



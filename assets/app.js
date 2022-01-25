var startButton = document.getElementById('start-button');
var timerEl = document.getElementById('timer');
var timerDisplayEl = document.getElementById('timer-display');
var quizContainer = document.querySelector('.quiz');
var quizIntro = document.getElementById('quiz-intro');
var questionText = document.getElementById('question-text');
var answerText = document.getElementById('answer-text');
var nextButton = document.querySelector('.next-btn')

var currentQuestion = '';
var correctAnswer = 0;

var allQuestions = [{
  'question': 'The sky is ___',
  'choices': ['Green', 'Blue', 'a figment of our imagination', 'All of the above'],
  'correctAnswer': 1},
  {
  'question': 'What is the best flavor of ice cream?',
  'choices': ['Vanilla', 'Chocolate', 'Coffee', 'Mint Chip'],
  'correctAnswer': 2},
  {
  'question': 'What can you do with Javascript?',
  'choices': ['Animate Websites', 'Create applications', 'Make Games', 'All of the above'],
  'correctAnswer': 3},
  {
  'question': 'Which Javascript library could have been used to aid in building this quiz?',
  'choices': ['New York Public Library', 'Library of Congress', 'Bootstrap', 'JQuery'],
  'correctAnswer': 2},
  {
  'question': 'Who created Javascript?',
  'choices': ['Mark Zuckerberg', 'Tom from Myspace', 'Brendan Eich', 'King Henry VII'],
  'correctAnswer': 2},
]

function beginQuiz() {
    quizContainer.style.display = 'block';
    quizIntro.replaceWith(quizContainer);
    startButton.style.display = 'none';
    revealQuestions()
  }
  
  
  startButton.addEventListener('click', function countdown() {
    beginQuiz();
      timerEl.style.display = 'block';
      var timeLeft = 60;
    
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

  function revealQuestions() {
      currentQuestion = allQuestions[0];
      questionText.textContent = currentQuestion.question;
    
      nextButton.addEventListener('click', function next() {
        currentQuestion++
})

  }
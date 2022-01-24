var startButton = $('#start-button');
var timerEl = $('#timer');
var timerDisplayEl = $('#timer-display')
var quizContainer = $('#quiz')
var questions = [
  {
    question: 'The sky is ____.',
    answers: {
      a: 'Brown',
      b: 'Blue',
      c: 'a figment of our imagination',
      d: 'All of the above'
    },
    correctAnswer: 'b'
  },
  {
    question: 'What can you do with Javascript?',
    answers: {
      a: 'Animate Websites',
      b: 'Create applications',
      c: 'Make Games',
      d: 'All of the above',
    },
    correctAnswer: 'd'
  },
  {
    question: 'Which Javascript library was used to aid in building this quiz?',
    answers: {
      a: 'New York Public Library',
      b: 'Library of Congress',
      c: 'Bootstrap',
      d: 'JQuery',
    },
    correctAnswer: 'd'
  },
  {
    question: 'What are arrays used for in Javascript?',
    answers: {
      a: 'To store multiple elements in a single variable',
      b: 'To protect your eyes from blue light',
      c: 'To dress a specific way (like a programmer)',
      d: 'A collection of solar panels that power your computer',
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who created Javascript?',
    answers: {
      a: 'Mark Zuckerberg',
      b: 'Tom from Myspace',
      c: 'Brendan Eich',
      d: 'King Henry VII',
    },
    correctAnswer: 'c'
  },
]

function beginQuiz() {
  quizContainer.text(questions)
}
beginQuiz()

startButton.on('click', function countdown() {
    timerEl.show();
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerDisplayEl.text(timeLeft);
        timeLeft--;
      } else if (timeLeft === 1) {
        timerDisplayEl.text(timeLeft);
        timeLeft--;
      } else {
        timerDisplayEl.text('');
        clearInterval(timeInterval);
      }
    }, 1000);
})
countdown();



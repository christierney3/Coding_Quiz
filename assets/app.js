var startButton = document.getElementById('start-button');
var timerEl = document.getElementById('timer');
var timerDisplayEl = document.getElementById('timer-display');
var quizContainer = document.querySelector('.quiz');
var quizIntro = document.getElementById('quiz-intro');
var questionText = document.getElementById('question-text');
var answerText = document.getElementById('answer-text');
var nextButton = document.querySelector('.next-btn')
var footer = document.querySelector('.footer')
var correctAnswer = 0;
var pos = 0;
var allQuestions = [{
  question: 'The sky is ___',
  a: 'Green',
  b: 'Blue',
  c: 'a figment of our imagination',
  d: 'All of the above',
  correctAnswer: 'b'},
  {
  question: 'What is the best flavor of ice cream?',
  a: 'Vanilla',
  b: 'Chocolate',
  c: 'Coffee',
  d: 'Mint Chip',
  correctAnswer: 'c'},
  {
  question: 'What can you do with Javascript?',
  a: 'Animate Websites',
  b: 'Create applications',
  c: 'Make Games',
  d: 'All of the above',
  correctAnswer: 'd'},
  {
  question: 'Which Javascript library could have been used to aid in building this quiz?',
  a: 'New York Public Library',
  b: 'Library of Congress',
  c: 'Bootstrap',
  d: 'JQuery',
  correctAnswer: 'd'},
  {
  question: 'Who created Javascript?',
  a: 'Mark Zuckerberg',
  b: 'Tom from Myspace',
  c: 'Brendan Eich',
  d: 'King Henry VII',
  correctAnswer: 'c'},
]
let i = 0;

function renderQuestions(){
  if (pos >= allQuestions.length){
    questionText.innerHTML = '<h2>You got '+correctAnswer+' of '+allQuestions.length+' questions correct</h2>';
    pos = 0;
    correctAnswer = 0;
    return false;
  }
}

function beginQuiz() {
    quizContainer.style.display = 'block';
    quizIntro.replaceWith(quizContainer);
    startButton.style.display = 'none';
    footer.style.display = 'block';
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

function get(x) {
  return document.getElementById(x);
}

function nextBtn() {
  nextButton.addEventListener('click', function () {
  for (i = 0; i<allQuestions.length; i++) {

  }
  
})  
  
  function revealQuestions() {
     nextBtn();
    currentQuestion = allQuestions[i];
    questionText.textContent = currentQuestion.question;
    answerText.textContent = currentQuestion.choices;
    return i;  
}


console.log(allQuestions)
console.log(allQuestions.length)    
console.log([i])
console.log(nextBtn)


allQuestions.forEach(
  (currentQuestion, questionNumber) => {
    var choices = [];
    var indexArray = [];

    for(string in currentQuestion.choices) {
      choices.push(
        `<label>
        <input type='radio' name='question${questionNumber}' value='${string}'>
          ${string}:
        ${currentQuestion.choices[string]}
         </label>`
      );
    }
    indexArray.push(
      `<div class='slides'>
         <div class='questions'>
      ${currentQuestion.question} </div>
         <div class= 'answers'>
      ${choices.join('')} </div>
       </div>`
    );
  }
)

// questionText.innerHTML = allQuestions[i].question;
// li1.innerHTML = allQuestions[i]
}
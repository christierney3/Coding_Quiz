var startButton = $('#start-button');
var timerEl = $('#timer');
var timerDisplayEl = $('#timer-display')


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

function countdown() {
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
  }
  
countdown();

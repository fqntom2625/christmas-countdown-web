const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
  const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = christmasDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minutesEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
  }
}

const timerInterval = setInterval(countdown, 1000);

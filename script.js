const timer = document.querySelector("h1");

const startBtn = document.getElementById("start-btn");

const stopBtn = document.getElementById("stop-btn");

const resetBtn = document.getElementById("reset-btn");

let sec = 0;
let interval = null;

const watch = () => {
  sec++;

  let hours = Math.floor(sec / 3600);
  let mins = Math.floor(sec / 60);
  let secs = sec % 60;

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  timer.innerText = `${hours}:${mins}:${secs}`;
};

const start = () => {
  if (interval) {
    return;
  }
  interval = setInterval(watch, 1000);
};

const stop = () => {
  clearInterval(interval);
  interval = null;
};

const reset = () => {
  stop();
  sec = 0;
  timer.innerText = "00:00:00";
};

startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);

resetBtn.addEventListener("click", reset);

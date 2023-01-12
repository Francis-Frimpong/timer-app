//Accessing various html elements
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const pauseBtn = document.querySelector(".purse");

//Adding click events on the buttons
startBtn.addEventListener("click", () => {
  start();
});

resetBtn.addEventListener("click", () => {
  reset();
});

pauseBtn.addEventListener("click", () => {
  pause();
});

//Counter variables for hrs,min,sec
let hrs = 0;
let min = 0;
let sec = 0;
let setTime;

//Button functionality

//start function
function start() {
  setTime = setInterval(() => {
    seconds.textContent = sec += 1;
    if (sec === 60) {
      seconds.textContent = sec = 0;
      minutes.textContent = min += 1;
    }
    if (min === 60) {
      hours.textContent = hrs += 1;
      minutes.textContent = min = 0;
      seconds.textContent = sec = 0;
    }
    hrs < 10 ? (hours.textContent = "0" + hrs) : hrs;
    min < 10 ? (minutes.textContent = "0" + min) : min;
    sec < 10 ? (seconds.textContent = "0" + sec) : sec;
  }, 1000);
}

//pause function
function pause() {
  clearInterval(setTime);
}

//reset function
function reset() {
  clearInterval(setTime);
  hours.textContent = hrs = 0;
  minutes.textContent = min = 0;
  seconds.textContent = sec = 0;
}

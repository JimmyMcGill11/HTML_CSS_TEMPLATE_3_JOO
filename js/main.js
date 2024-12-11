// Counter

let days = document.querySelector(".events .info .time .unit:nth-child(1) span");
let hours = document.querySelector(".events .info .time .unit:nth-child(2) span");
let minutes = document.querySelector(".events .info .time .unit:nth-child(3) span");
let seconds = document.querySelector(".events .info .time .unit:nth-child(4) span");

function countDownSec () {
  if (seconds.innerHTML == 0) {
    if (minutes.innerHTML == 0) {
      if (hours.innerHTML == 0) {
        days.innerHTML--;
        hours.innerHTML = 24;
      }
      hours.innerHTML--;
      minutes.innerHTML = 60;
    }
    seconds.innerHTML = 60;
    minutes.innerHTML--;
  }
  seconds.innerHTML--;
}

secCounter = setInterval(countDownSec, 1000);
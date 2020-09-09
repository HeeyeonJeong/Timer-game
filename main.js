const timerBox = document.querySelector(".timerbox");
const time = document.querySelector(".time");
const btn = document.querySelector(".btn");

function countTimer() {
  let cnt = 10;

  function minus() {
    if (cnt === 0) {
      clearInterval(timer);
      timerBox.classList.add("border");
      time.innerHTML = "!! finish !!";
    } else if (cnt > 0) {
      timerBox.classList.remove("border");
      time.innerHTML = cnt;
      cnt--;
    }
  }
  let timer = setInterval(minus, 1000);
}

btn.addEventListener("click", countTimer);

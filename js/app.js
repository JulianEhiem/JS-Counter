const currentNumber = document.querySelector("#countNumber");
const countUp = document.querySelector(".btn-up");
const countDown = document.querySelector(".btn-down");

let count = 0;

const increase = function () {
  count++;
  currentNumber.textContent = count;
};

const decrease = function () {
  count--;
  currentNumber.textContent = count;
};

countUp.addEventListener("click", increase);
countDown.addEventListener("click", decrease);

const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');

increaseButtonEl.addEventListener('click', function() {
  const currentValue = parseInt(counterValueEl.textContent);
  counterValueEl.textContent = currentValue + 1;
})

decreaseButtonEl.addEventListener('click', function() {
  const currentValue = parseInt(counterValueEl.textContent);
  if (currentValue > 0) {
    counterValueEl.textContent = currentValue - 1;
  }
}
)

resetButtonEl.addEventListener('click', function() {
  counterValueEl.textContent = 0;
}
)

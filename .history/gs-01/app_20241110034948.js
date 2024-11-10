const inputEl = document.querySelector('.main-input');
const buttonEl = document.querySelector('.main-button');
const listEl = document.querySelector('.main-list');

function addGoal(evt) {
  const inputValue = inputEl.value;
  console.log(inputValue);
}

buttonEl.addEventListener('click', addGoal);

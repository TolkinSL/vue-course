const inputEl = document.querySelector('.main-input');
const buttonEl = document.querySelector('.main-button');
const listEl = document.querySelector('.main-list');

function addGoal(evt) {
  console.log(evt);
}

buttonEl.addEventListener('click', addGoal);

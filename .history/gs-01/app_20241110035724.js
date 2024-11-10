const inputElement = document.querySelector('.main-input');
const buttonElement = document.querySelector('.main-button');
const listElement = document.querySelector('.main-list');

function addGoal(evt) {
  const inputValue = inputElement.value;
  console.log(inputElement);

  const listItem = document.createElement('li');
  listItem.textContent = inputValue;
  listElement.appendChild(listItem);
}

buttonElement.addEventListener('click', addGoal);

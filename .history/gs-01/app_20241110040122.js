const inputElement = document.querySelector('.main-input');
const buttonElement = document.querySelector('.main-button');
const listElement = document.querySelector('.main-list');

function addGoal(evt) {
  const inputValue = inputElement.value;
  // console.log(inputValue);

  const listItem = document.createElement('li');
  console.log(listItem);
  // listItem.textContent = inputValue;
  // listElement.appendChild(listItem);
}

buttonElement.addEventListener('click', addGoal);

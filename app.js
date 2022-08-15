// console.clear();
const inputEl = document.querySelector('#input-el');
const checkBtn = document.querySelector('#check-btn');

// Modal alert
const modal = document.querySelector('#myModal');
const theAnswer = document.querySelector('.theAnswer');
const closeBtn = document.querySelector('.close');

let userAnswer = ['Good, right answer', 'Incorrect, try again'];

checkBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  let userInput = parseInt(inputEl.value); // number value
  if (userInput === 2) {
    modal.style.background = '#0fa722';
    theAnswer.textContent = userAnswer[0];
  } else {
    modal.style.background = '#e74c3c;';
    theAnswer.textContent = userAnswer[1];
  }
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

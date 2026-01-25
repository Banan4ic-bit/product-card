//Покраска первой карточки 

const firstProductCard = document.querySelector('.product_card');
const changeColorFirstCardButton = document.querySelector('#control-first-card-button');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = greenColorHash;
})

//Покраска всех карточек 

const productCards = document.querySelectorAll('.product_card');
const changeColorAllCardsButton = document.querySelector('#control-all-cards-button');

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash);
})

//Открыть google

const openGoogleButton = document.querySelector('#external-link-button');

openGoogleButton.addEventListener('click', () => {
  const answer = confirm('Вы действительно хотите перейти на этот сайт?');
  if (answer === true) {
    window.open('https://google.com')
  }
  else {
    return;
  }
})

//Вывод консоль лог 

const outputConsoleLogButton = document.querySelector('#log-button');

outputConsoleLogButton.addEventListener ('click', () => outputConsoleLog('Дз 4'));

function outputConsoleLog(message) {
  alert('Иди нахуй')
  console.log(message)
}

//Вывод заголовка h1 в console log 

const outputH1ConsoleLog = document.querySelector('.title');

outputH1ConsoleLog.addEventListener('mouseover', () => {
  console.log(outputH1ConsoleLog.textContent);
})

//Смена цвета кнопки с одной на другой 

const changeColors = document.querySelector('#control-toggle-button')

changeColors.addEventListener('click', () => {
  if (changeColors.classList.contains('btn-red')) {
    changeColors.classList.replace('btn-red', 'btn-black')
  }
  else {
    changeColors.classList.replace('btn-black', 'btn-red')
  }
})

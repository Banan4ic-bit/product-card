  import "./homework-5.js";
  import "./homework-6.js";
  import "./homework-7.js";
  import "./homework-8.js";
  import "./homework-10.js";
  
  //Покраска первой карточки 

  const firstProductCard = document.querySelector('.product_card');
  const colorChangeFirstCardButton = document.querySelector('#control-first-card-button');
  const greenColorHash = '#00FF00';
  const blueColorHash = '#0000FF';

  colorChangeFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = greenColorHash;
  })

  //Покраска всех карточек 

  const productCards = document.querySelectorAll('.product_card');
  const colorChangeAllProductCardsButton = document.querySelector('#control-all-cards-button');

  colorChangeAllProductCardsButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = blueColorHash);
  })

  //Открыть google

  const googleLinkOpenButton = document.querySelector('#external-link-button');

  googleLinkOpenButton.addEventListener('click', () => {
    const answer = confirm('Вы действительно хотите перейти на этот сайт?');
    if (answer === true) {
      window.open('https://google.com')
    }
    else {
      return;
    }
  })

  //Вывод консоль лог 

  const logMessageButton = document.querySelector('#log-button');

  logMessageButton.addEventListener ('click', () => outputMessage('Дз 4'));

  function outputMessage(message) {
    alert('Иди нахуй')
    console.log(message)
  }

  //Вывод содержимого заголовка в console log 

  const contentTitleOutputLog = document.querySelector('.title');

  contentTitleOutputLog.addEventListener('mouseover', () => {
    console.log(contentTitleOutputLog.textContent);
  })

  //Смена цвета кнопки с одного на другой 

  const colorToggleButton = document.querySelector('#control-toggle-button')

  colorToggleButton.addEventListener('click', () => {
    colorToggleButton.classList.toggle('control-button--modified');
  })

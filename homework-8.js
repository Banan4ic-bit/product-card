import { productCards } from "./cards.js";

const productCardTemplate = document.getElementById('product_card-template');
const productCardList = document.getElementById('product_card_list');

// 4: Преобразовать массив продуктов в объект с помощью .reduce(),
// где ключи — названия продуктов, а значения — их описания.

const productCardNamesWithDescription = productCards.reduce((acc, card) => {
  acc.push({[card.name]: card.description})
  return acc
},[])

console.log(productCardNamesWithDescription);

//// 5: При загрузке страницы запросить у пользователя число от 1 до 5 через prompt.
// Реализовать валидацию ввода и две функции: одна получает кол-во карточек, 
// вторая — рендерит соответствующее число элементов на страницу

function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");

  if (input === null) {
    alert("Вы не ввели число")
    return null
  }

  const count = Number(input.trim());
  
  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    return count
  } else {
    alert("Вы ввели неправильное число")
    return null
  }
}

const count = getCardsCount()

function setText(clone, selector, value) {
  const element = clone.querySelector(selector);

  if (element) {
    element.textContent = value
  } else {
    console.warn(`Ошибка: Селектор "${selector}" не найден в шаблоне`);
  }
}

function renderCards(cardsArray) {
  productCardList.innerHTML = ""

  cardsArray.forEach(card => {
    const productCardClone = productCardTemplate.content.cloneNode(true);

    const img = productCardClone.querySelector('.product_card_image');
    img.src = `img/${card.image}`
    img.alt = card.name

    setText(productCardClone, '.product_card_category', card.category)
    setText(productCardClone, '.product_card_name', card.name)
    setText(productCardClone, '.product_card_description', card.description)
    setText(productCardClone, '.product_card_price_value', `${card.price} ₽`)
    
    const compoundList = productCardClone.querySelector('.product_card_compound');
    card.compound.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      compoundList.appendChild(li)
    })
    productCardList.appendChild(productCardClone)
  })
}

if (count !== null) {
  const visibleCards = productCards.slice(0, count)
  renderCards(visibleCards)
}
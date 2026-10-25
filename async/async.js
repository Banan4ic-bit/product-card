async function getUsers() {
  const response = await fetch('users.json');
  const data = await response.json();
  
  return data.users;
}

const cardTemplate = document.getElementById('card-template')
const cardList = document.getElementById('users-list')

function renderUsers (array) {
  cardList.querySelectorAll('.card').forEach(card => {
  card.remove();
  });

  array.forEach(user => {
    const userClone = cardTemplate.content.cloneNode(true)

    userClone.querySelector('.name').textContent = user.name;
    userClone.querySelector('.surname').textContent = user.surname;
    userClone.querySelector('.age').textContent = user.age;
    userClone.querySelector('#delete-card').setAttribute('data-user-id', user.id)
    cardList.appendChild (userClone)
  })
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  });
}

const load = document.querySelector('.load');
let users = [];

async function init() {
  const userString = localStorage.getItem('users');
try {
      if (userString !== null) {
      users = JSON.parse(userString);
      renderUsers(users)  
    } else {
      load.textContent = "Данные загружаются"
      await delay(3000)
      users = await getUsers();
      localStorage.setItem('users', JSON.stringify(users))
      load.textContent = ""
      renderUsers(users);
    }
  } catch (error) {
    load.textContent = "Ошибка загрузки";
    
    console.log(error)
  }
}

init()

const deleteAll = document.getElementById('delete-all');
const getCards = document.getElementById('get-cards');

deleteAll.addEventListener('click', ()=> {
  cardList.querySelectorAll('.card').forEach(card => {
    card.remove();
  })
  users = [];
  localStorage.setItem('users', JSON.stringify(users))
})

cardList.addEventListener('click', (event) => {
  if (event.target.matches('[data-user-id]')) {
    const userId = parseInt(event.target.getAttribute('data-user-id'))
    users = users.filter(user => user.id !== userId)
    localStorage.setItem('users', JSON.stringify(users));
    event.target.parentElement.remove()
  }
})

getCards.addEventListener('click', async ()=> {
  load.textContent = "Данные загружаются"
  await delay(3000)
  users = await getUsers()
  load.textContent = ""
  renderUsers(users)
  localStorage.setItem('users', JSON.stringify(users))
})
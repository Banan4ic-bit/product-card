async function getUsers() {
  const response = await fetch('users.json');
  const data = await response.json();
  
  return data.users;
}

const cardTemplate = document.getElementById('card-template')
const cardList = document.getElementById('users-list')

function renderUsers(array) {
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

function saveUsers(array) {
  localStorage.setItem('users', JSON.stringify(array));
}

function deleteAllUsers() {
  users = [];
  saveUsers(users);
}

async function loadUsers() {
  loadingMessage.textContent = "Данные загружаются"
  await delay(3000)
  users = await getUsers();
  saveUsers(users);
  loadingMessage.textContent = ""
  renderUsers(users);
}

function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
  saveUsers(users);
}

const loadingMessage = document.querySelector('.load');
let users = [];

async function init() {
  const usersFromStorage = localStorage.getItem('users');

  try {
    if (usersFromStorage !== null) {
      users = JSON.parse(usersFromStorage);
      renderUsers(users)  
    } else {
      await loadUsers()
    }
  } catch (error) {
    loadingMessage.textContent = "Ошибка загрузки";
    console.log(error)
  }
}

init()

const deleteAll = document.getElementById('delete-all');
const getCards = document.getElementById('get-cards');

//Удалить всех пользователей
deleteAll.addEventListener('click', ()=> {
  cardList.querySelectorAll('.card').forEach(card => {
    card.remove();
  })
  deleteAllUsers()
})

//Удалить определенного пользователя по ID
cardList.addEventListener('click', (event) => {
  if (event.target.matches('[data-user-id]')) {
    const userId = parseInt(event.target.getAttribute('data-user-id'))
    deleteUser(userId)
    event.target.parentElement.remove()
  } 
})

//Получить все карточки
getCards.addEventListener('click', async ()=> {
  await loadUsers()
})
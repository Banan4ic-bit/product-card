//3.Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. 
// Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.

const identity = {
  firstName: "Бананчик",
  lastName: "Бананов",
  email: "banana@gmail.com",
  phone: "+38099999999",
  workplace: "Бомж",
  position: "Старший бомж",
  age: 22,
  country: "Украина",
  city: "Измаил",
  relationshipStatus: "Всё сложно"
}

//4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). 
// Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
// Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const luxCar = {
  brand: "Porsche",
  model: "911 gt3",
  year: 2023,
  color: "black",
  transmission: "automatic"
}

luxCar.carOwner = identity;
console.log(luxCar)

//5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, 
// если есть - прекращает выполнение (ничего не делает)

function ensureMaxSpeed(car) {
  if(car.maxSpeed) {
    return;
  }
  else {
    car.maxSpeed = "250 km/h";
  }
}

ensureMaxSpeed(luxCar);
console.log(luxCar);

//6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, 
// которое нужно вывести и выводит его значение.

function showObjectProperty(object, property) {
  console.log(property + ":", object[property]);
}

showObjectProperty(luxCar, "brand");

//7. Создать массив, который содержит названия продуктов (просто строки)

const products = [
  'Апельсины',
  'Мандарины',
  'Ананасы',
  'Черешня',
  'Вишня',
  'Бананы',
  'Яблоки',
  'Груша',
  'Абрикосы',
  'Персики'
]

console.log(products);

//8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). 
//После, используя известный нам метод массив, добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const books = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "фэнтези, приключения"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "красно-черный",
    genre: "антиутопия, социальная фантастика"
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сант-Экзюпери",
    year: 1943,
    coverColor: "синий",
    genre: "сказка, философская притча"
  },
  {
    title: "Шерлок Холмс: Этюд в багровых тонах",
    author: "Артур Конан Дойл",
    year: 1887,
    coverColor: "тёмно-красный",
    genre: "детектив"
  },
  {
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    year: 1925,
    coverColor: "синий",
    genre: "роман, драма"
  }
];

books.push({title: "Дюна", author: "Франк Херберт", year: 1965, coverColor: "оранжевый", genre: "научная фантастика, приключения"});
console.log(books);

//9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). 
// (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора (рекомендую использовать оператор), 
// объединить эти два массива в один

const marvelBooks = [
  {
    title: "Spider-Man: Hostile Takeover",
    author: "David Liss",
    year: 2018,
    coverColor: "черный",
    genre: "приключения, супергерои"
  },
  {
    title: "Black Widow: Forever Red",
    author: "Margaret Stohl",
    year: 2015,
    coverColor: "синий",
    genre: "шпионский боевик, супергерои"
  },
  {
    title: "Guardians of the Galaxy: Collect Them All",
    author: "Corinne Duyvis",
    year: 2017,
    coverColor: "голубой",
    genre: "фантастика, супергерои"
  },
  {
    title: "Avengers: Everybody Wants to Rule the World",
    author: "Dan Abnett",
    year: 1999,
    coverColor: "черный",
    genre: "фантастика, супергерои",
  },
  {
    title: "Iron Man: Extremis (novelization)",
    author: "Marie Javins",
    year: 2013,
    coverColor: "красный",
    genre: "фантастика, супергерои"
  },
];

const allBooks = [...books, ...marvelBooks];
console.log(allBooks);

//10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), 
// устанавливаем true или false. Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), 
// нет - false (значит это не редкий).

const marvelBooksUpdated = marvelBooks.map(function (book) {
  const updateBook = {...book};
  if (updateBook.year <= 2000) {
    updateBook.isRare = true
  } else {
    updateBook.isRare = false
  }
  return updateBook;
})

console.log(marvelBooksUpdated);
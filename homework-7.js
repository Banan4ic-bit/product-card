//2. Отфильтровать числа от 5

import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersForFive = numbers.filter(number => number >= 5)
console.log(numbersForFive);

//3. Массив фильмов и проверка наличия

const movies = ['человек паук','железный человек', 'халк', 'стражи галактики', 'джокер']

const input = prompt("Введите название фильма").trim().toLowerCase()
const movie = movies.includes(input);
console.log(movie);

//4. Перевернуть массив без изменения оригинала

function reverseArray(array) {
  return [...array].reverse();
}

console.log ("Результат метода reverse:\n" + reverseArray(numbers));
console.log ("Результат метода reverse:\n" + reverseArray(movies));

// 7. Отфильтровать комментарии с ".com" в почте

const emailsWithCom = comments.filter(comment => comment.email.includes(".com"))
console.log(emailsWithCom);

//8. Обновить postId в зависимости от id

const commentsNewId = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(commentsNewId)

//9. Оставить только id и name

const namesWithId = comments.map(comment => ({
  id: comment.id,
  name: comment.name,
}));

console.log(namesWithId)

//10. Добавить isInvalid по длине body

const commentsWithIsInvalid = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}))

console.log(commentsWithIsInvalid)

//11. Получить массив почт через reduce и map

const emailsFromReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc
}, []);

console.log(emailsFromReduce);

const emailsFromMap = comments.map(comment => comment.email)
console.log(emailsFromMap)

//12. Преобразовать массив почт в строку

const emailsString = emailsFromReduce.join('\n');
console.log(emailsString);
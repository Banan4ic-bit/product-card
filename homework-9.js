//4. Валидация формы подписки в футере.
// Проверяем email через HTML-валидацию (checkValidity).
// Если форма валидна — выводим в консоль объект вида: { email: значение }.
const formSubscribe = document.querySelector(".footer_form");

function getFormData(form) {
  const obj = Object.fromEntries(new FormData(form).entries())
  return obj;
}

formSubscribe.addEventListener("submit", (event) => {
  event.preventDefault()

  if (formSubscribe.checkValidity()) {
    const data = getFormData(formSubscribe)
    const emailObj = {email : data.email}
    console.log(emailObj)
  } else {
    console.warn("Вы не ввели правильно email")
  }
})

//5. Реализация модального окна регистрации.
// Открытие по кнопке "Регистрация" (добавление класса modal-showed).
// Закрытие по кнопке крестика, (дополнительно сама сделала: клику по overlay и клавише Escape).
// Overlay затемняет фон, модалка центрирована по экрану.
const openModalBtn = document.querySelector('.registration');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal_close');

function openModal() {
  modal.classList.add('modal-showed')
  overlay.classList.add('overlay-showed')
}

function closeModal() {
  modal.classList.remove('modal-showed')
  overlay.classList.remove('overlay-showed')
}

openModalBtn.addEventListener("click",openModal)
closeBtn.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})


//6. Форма регистрации внутри модального окна.
// Все поля обязательны и валидируются (checkValidity).
// Дополнительно проверяем совпадение паролей.
// При успехе — собираем данные формы в объект,
// добавляем поле createdOn с текущей датой,
// сохраняем в переменную user и выводим в консоль.
// После успешной регистрации закрываем модалку и очищаем форму.
const formRegistration = document.querySelector(".form_registration");
let user = null;

formRegistration.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formRegistration.checkValidity()) {
      const data = getFormData(formRegistration)
    if (data.password === data.confirm_password) {
      user = data;
      user.createdOn = new Date().toLocaleDateString("uk-UA")
      alert("Регистрация прошла успешно, ваша информация в консоль логе")
      console.log(user)
      formRegistration.reset()
      closeModal()
    }
    else {
      alert("Пароли различаются, введите одинаковые пароли")
    }
  } else {
    alert("Заполните правильно форму")
  }
})
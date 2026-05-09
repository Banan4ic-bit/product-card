import { Form } from "./Form.js";
import { Modal } from "./Modal.js";
import { Game } from "./Game.js";
import { OnlineGame } from "./OnlineGame.js";
import { SingleGame } from "./SingleGame.js";

const formSubscribe = new Form('footer_form_subscrb')

formSubscribe.form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (formSubscribe.isValid()) {
    const data = formSubscribe.getFormData()
    const emailObj = {email : data.email}
    console.log(emailObj)
  } else {
    console.warn("Вы не ввели правильно email")
  }
})

const openModalBtn = document.querySelector('.registration');

const modal = new Modal('registration-modal');
openModalBtn.addEventListener('click', ()=> {
  modal.open()
})

let user = null;
const formRegistration = new Form('form_registration');
formRegistration.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formRegistration.isValid()) {
    alert("Заполните правильно форму")
    return
  }
  const data = formRegistration.getFormData();
  if (data.password === data.confirm_password) {
    user = data;
    user.createdOn = new Date().toLocaleString("uk-UA")
    alert("Регистрация прошла успешно, ваша информация в консоль логе")
    console.log(user)
    formRegistration.resetFormData()
    modal.close()
  } else {
    alert("Пароли различаются, введите одинаковые пароли")
    return
  } 
})


//Создание экземпляра классов Game, SingleGame, OnlineGame 
const battlefield = new OnlineGame("battlefield", "shooter", 2019, 60)
battlefield.startServer();

const theWitcher = new SingleGame("Witcher 3", "Action", 2015, 80)
theWitcher.description();
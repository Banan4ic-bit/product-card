import { Game }  from "./Game.js";

export class OnlineGame extends Game {
  constructor(name, category, releaseYear, maxPlayer) {
    super(name, category, releaseYear)
    this.maxPlayer = maxPlayer
  }

  startServer() {
    console.log(`Сервер игры ${this.name} был запущен. Жанр: ${this.category}, Релиз: ${this.releaseYear}. Максимально количество игроков: ${this.maxPlayer}`)
  }
}
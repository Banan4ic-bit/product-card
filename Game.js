export class Game {
  constructor(name,category, releaseYear) {
    this.name = name;
    this.category = category;
    this.releaseYear = releaseYear;
  }

  release() {
    console.log(`Игра${this.name}, жанра:${this.category} была выпущена в ${this.releaseYear}`)
  }                                                                                                                                                                              
}

export class SingleGame extends Game {
  constructor(name, category, releaseYear, averagePlaytime) {
    super(name, category, releaseYear)
    this.averagePlaytime = averagePlaytime;
  }

  description() {
    console.log(`${this.name}, жанра ${this.category} выпущена в ${this.releaseYear}, среднее время прохождения ${this.averagePlaytime}`)
  }
}

export class OnlineGame extends Game {
  constructor(name, category, releaseYear, maxPlayer) {
    super(name, category, releaseYear)
    this.maxPlayer = maxPlayer
  }

  startServer() {
    console.log(`Сервер игры ${this.name} был запущен. Жанр: ${this.category}, Релиз: ${this.releaseYear}. Максимально количество игроков: ${this.maxPlayer}`)
  }
}
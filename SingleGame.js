import { Game } from "./Game.js";

export class SingleGame extends Game {
  
  constructor(name, category, releaseYear, averagePlaytime) {
    super(name, category, releaseYear)
    this.averagePlaytime = averagePlaytime;
  }

  description() {
    console.log(`${this.name}, жанра ${this.category} выпущена в ${this.releaseYear}, среднее время прохождения ${this.averagePlaytime}`)
  }

}
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


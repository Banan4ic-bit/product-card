import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, lemonadeType, additive) {
    super(name, size, price);
    this.lemonadeType = lemonadeType;
    this.additive = additive;
  }

  getInfo() {
    return super.getInfo() + `Тип лимонада: ${this.lemonadeType}, Добавки:${this.additive}`;
  }

  prepare() {
    console.log(`${this.lemonadeType} лимонад готовится, добавляем еще ${this.additive}`)
    this.setTemperature(10)
  }
}
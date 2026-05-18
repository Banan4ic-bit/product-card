import { Drink } from "./Drink.js";

export class Juice extends Drink {

  constructor(name, size, price, juiceType, juiceFormat) {
    super(name, size, price);
    this.juiceType = juiceType;
    this.juiceFormat = juiceFormat
  }

  getInfo() {
    return super.getInfo() + `Сок типа: ${this.juiceType}, Формат: ${this.juiceFormat}`
  }

  prepare() {
    console.log(`Выбран сок типа ${this.juiceType}, Формат готовки ${this.juiceFormat}. Берем стакан и наливаем`)
    this.setTemperature(15)
  }

}
import { Drink } from "./Drink.js";

export class Juice extends Drink {
  constructor(name, size, price, juiceType, JuiceFormat) {
    super(name, size, price);
    this.juiceType = juiceType;
    this.JuiceFormat = JuiceFormat
  }

  getInfo() {
    return super.getInfo() + `Сок типа: ${this.juiceType}, Формат: ${this.JuiceFormat}`
  }

  prepare() {
    console.log(`Выбран сок типа ${this.juiceType}, Формат готовки ${this.JuiceFormat}. Берем стакан и наливаем`)
    this.setTemperature(15)
  }
}
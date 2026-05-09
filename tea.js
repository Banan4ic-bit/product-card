import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, teaType, teaFormat) {
    super(name, size, price)
    this.teaType = teaType;
    this.teaFormat = teaFormat;
  }

  getInfo() {
    return super.getInfo() + ` Чай: ${this.teaType}, Формат: ${this.teaFormat}`
  }

  prepare() {
    console.log(`${this.name}, берем размер ${this.size}, формат ${this.teaFormat} типа ${this.teaType} в кружку закидываем и заливаем кипяток`)
    this.setTemperature(100)
  }
}
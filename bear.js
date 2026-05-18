import { Drink } from "./Drink.js";

export class Bear extends Drink {

  constructor(name, size, price, bearType, beerStrength) {
    super(name, size, price)
    this.bearType = bearType;
    this.beerStrength = beerStrength;
  }

  getInfo() {
    return super.getInfo() + `Тип пива: ${this.bearType}, крепкость: ${this.beerStrength}%`
  }

  prepare() {
    console.log(`Берем большой стакан, наливаем пива с бочки типа ${this.bearType} и такой крепкости ${this.beerStrength}%`)
    this.setTemperature(5)
  }
  
}
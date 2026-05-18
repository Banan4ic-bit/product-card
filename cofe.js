import { Drink } from "./Drink.js";

export class Cofe extends Drink {

  constructor(name, size, price, grainType, milkType) {
    super(name, size, price);
    this.grainType = grainType;
    this.milkType = milkType;
  }

  getInfo() {
    return super.getInfo() + `Вид зёрен:${this.grainType}, вид молока:${this.milkType}`
  }

  prepare() {
    console.log(`Подготовка стакана, выбираем зёрна вида:${this.grainType}, варим, добавляем ${this.milkType}. ${this.name} готово`)
    this.setTemperature(90)
  }
  
}
export class Cafe {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  getInfo() {
    return `${this.name}, ${this.city}`
  }

  orderDrink(drink) {
    drink.serve()
  }
}
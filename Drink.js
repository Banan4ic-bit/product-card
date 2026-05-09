export class Drink {
  #temperature
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name}, размер: ${this.size}, Цена: ${this.price}, `
  }

  getTemperature() {
    return `Температура напитка: ${this.#temperature}`
  }

  setTemperature(newTemperature) {
    return this.#temperature = newTemperature
  }

  prepare() {

  }

  serve() {
    this.prepare()
    console.log(this.getInfo())
    console.log(this.getTemperature())
    console.log(`Напиток ${this.name} подано`)
  }
}


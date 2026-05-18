import { Drink } from "./Drink.js";
import { Cofe } from "./cofe.js";
import { Lemonade } from "./lemonade.js";
import { Bear } from "./bear.js";
import { Juice } from "./juice.js";
import { Tea } from "./tea.js";
import { Cafe } from "./Cafe.js";

const bear = new Bear("Пиво", 500, 80, "Чешское", 8);
const cafe = new Cafe("Пивная лавка", "Одесса")

console.log(cafe.getInfo());
cafe.orderDrink(bear)


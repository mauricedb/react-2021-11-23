import { Calculator } from "./calculator";

const calc = new Calculator((...data) => console.log(...data))

const sum = calc.add(4, 2)
console.log(`4 + 2 = ${sum}`);

import { Calculator } from './calculator';

const calc = new Calculator((...data) => console.log(...data));

const sum = calc.add(4, 5);
console.log(`4 + 5 = ${sum}`);

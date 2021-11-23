class Calculator {
    constructor(msg) {
        this.msg = msg;
    }
    add(x, y) {
        console.log(this.msg);
        // this.msg = ''
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
}
const x = document.getElementById('x');
const y = document.getElementById('y');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');
const calculator = new Calculator('A message');
// console.log(calculator.msg);
add.addEventListener('click', () => {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener('click', () => {
    result.textContent = calculator
        .subtract(parseInt(x.value), +y.value)
        .toString();
});

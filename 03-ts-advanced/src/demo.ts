const nerdyJokesUrl ="http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

class Calculator {
  calculate(operation: string, x: number, y: number) {
    let result = NaN;

    switch (operation) {
      case "Add":
        result = this.add(x, y);
        break;
      case "Subtract":
        result = this.subtract(x, y);
        break;
    }

    return result;
  }

  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator();

add.addEventListener("click", () => {
  result.textContent = calculator
    .calculate("Add", +x.value, +y.value)
    .toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator
    .calculate("Subtract", +x.value, +y.value)
    .toString();
});

interface MyCalc {
  subtract(x: number, y: number): number;
  add(x: number, y: number): number;
  multiply(x: number, y: number): number;
}

type MyCalcType = {
  subtract(x: number, y: number): number;
};

interface Person {
  firstName: string;
  lastName: string;
}

type MyString = string;

function test<T>(param: T) {}

class Calculator implements MyCalcType {
  constructor(public readonly msg: MyString) {}
  add(x: number, y: number): number {
    console.log(this.msg);
    // this.msg = ''
    return x + y;
  }
  subtract(x: number, y: number) {
    return x - y;
  }
  multiply(x: number, y: number) {
    return x * y;
  }
}

const x = document.getElementById('x') as HTMLInputElement;
const y = <HTMLInputElement>document.getElementById('y');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

const calculator: MyCalc = new Calculator('A message');

const xxx: { add(x: number, y: number): number } = new Calculator('A message');

xxx.add(1, 2);

function fullName(person: { fistName: string; lastName: string }): string {
  return person.fistName + ' ' + person.lastName;
}

fullName({ fistName: '', lastName: '' });

// console.log(calculator.msg);

add.addEventListener('click', () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener('click', () => {
  result.textContent = calculator
    .subtract(parseInt(x.value), +y.value)
    .toString();
});

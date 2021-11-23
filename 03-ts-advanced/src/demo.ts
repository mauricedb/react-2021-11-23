const nerdyJokesUrl =
  'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

class Calculator {
  calculate(operation: string, x: number, y: number) {
    let result = NaN;

    switch (operation) {
      case 'Add':
        result = this.add(x, y);
        break;
      case 'Subtract':
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

const x = document.getElementById('x') as HTMLInputElement;
const y = document.getElementById('y') as HTMLInputElement;
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

const calculator = new Calculator();

add.addEventListener('click', () => {
  result.textContent = calculator
    .calculate('Add', +x.value, +y.value)
    .toString();
});

subtract.addEventListener('click', () => {
  result.textContent = calculator
    .calculate('Subtract', +x.value, +y.value)
    .toString();
});

// const enum X {
//   a = 'a',
//   b = 'b',
// }

type X = 'a' | 'b';

function useX(x: X, y: string) {
  console.log(x);
}

useX('a', '');

type PartofX = Partial<Calculator>;

type Params = Parameters<typeof useX>;

declare const _type: unique symbol;

type Opaque<A, B> = A & {
  readonly [_type]: B;
};

type Amount = Opaque<number, 'Amount'>;
type Account = Opaque<number, 'Account'>;

function sendMoney(account: Account, amount: Amount) {}

const account: Account = 456 as Account;
const amount: Amount = 123 as Amount;
sendMoney(account, amount);

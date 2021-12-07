import { IsPrimeNumber, IsPrimeNumberMemo } from './IsPrimeNumber';

export function CheckPrimeNumbers() {
  const values = [
    15_485_867, 32_452_869, 49_979_693, 67_867_979, 86_028_151, 104_395_303,
    122_949_827,
  ];

  return (
    <section>
      <h5 className="m-3">Prime numbers</h5>

      <ul className="list-group">
        {values.map((value) => (
          <IsPrimeNumberMemo key={value} value={value} />
        ))}
      </ul>
    </section>
  );
}

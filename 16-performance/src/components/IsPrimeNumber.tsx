import { isPrime } from '../utils/isPrime';
import { RenderCount } from './RenderCount';

interface Props {
  value: number;
}

export function IsPrimeNumber({ value }: Props) {
  return (
    <li className="list-group-item">
      <RenderCount />
      {/* <div className={`card `}> */}
      <div className="text-center">
        <div className="fs-5">{value.toLocaleString()}</div>
        <div className="fs-3">{isPrime(value) ? '✔️' : '❌'}</div>
      </div>
      {/* </div> */}
    </li>
  );
}

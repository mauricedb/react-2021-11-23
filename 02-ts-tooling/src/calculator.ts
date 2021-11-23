export type Logger = (...data: any[]) => void;

export class Calculator {
  constructor(private logger: Logger) {}

  add(
    x: number,
    y: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number {
    const sum = x + y;

    this.logger(`Log: ${x} + ${y} = ${sum}`);

    return sum;
  }
}

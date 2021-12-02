function testMe(x: number) {
  if (x! < 10) {
    return x;
  } else {
    return 9;
  }
}

function throwSomeError() {
  throw new Error('Another error');
}

describe('Some basic tests', () => {
  beforeAll(() => {});

  beforeEach(() => {});

  test.skip('a first test', () => {
    expect(2 + 3).toBe(6);
  });

  //   test.only('2 + 3 === 5', () => {
  test('2 + 3 === 5', () => {
    expect(2 + 3).toBe(5);
  });

  test('0.1 + 0.2 === 0.3', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
  });

  test('Twp object', () => {
    expect({ x: 1, y: 2 }).toEqual({ y: 2, x: 1 });
  });

  test('async', async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 100));
  });

  test('The testMe() funtion', () => {
    testMe(1);
    testMe(100);
  });

  test('Test for error', () => {
    expect(() => throwSomeError()).toThrowErrorMatchingSnapshot();
  });
});

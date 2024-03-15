const square = require('./square');

describe('square', () => {
  // перед каждым тестом
  beforeEach(() => {
    // Ex: adding something to DB
  });
  // Один раз перед тестами
  beforeAll(() => {});

  test('Корректное значение', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1); // метод pow был вызван один раз
  });
  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0); // метод pow был вызван 0 раз
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    // Ex: Clear DB
  });
});

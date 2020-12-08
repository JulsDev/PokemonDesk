import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  const cases = [
    ['javascript', 'Javascript'],
    ['JAVASCRIPT', 'Javascript'],
    ['JaVaScRiPt', 'Javascript'],
  ];

  it.each(cases)('должен вернуть строку, где первая буква заглавная, а остальные маленькие', (value, expected) => {
    const result = toCapitalizeFirstLetter(value);
    expect(result).toBe(expected);
  });
});

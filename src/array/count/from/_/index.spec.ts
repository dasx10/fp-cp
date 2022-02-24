import countFrom from '.';

describe('countFrom', () => {
  test('countFrom has', () => {
    expect(countFrom([1, 2], [1, 2, 3, 4])).toBe(2);
  });

  test('countFrom no has', () => {
    expect(countFrom([11, 12], [1, 2, 3, 4])).toBe(0);
  });
});

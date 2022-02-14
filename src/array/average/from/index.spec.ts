import averageFrom from '.';

test('average of', () => {
  expect(averageFrom([1, 2, 3])).toBe(2);
  expect(averageFrom([])).toBe(0);
  expect(averageFrom([])).toBeDefined();
});

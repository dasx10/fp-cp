import averageOf from '../../../../src/array/average/of';

test('average of', () => {
  expect(averageOf(1, 2, 3)).toBe(2);
  expect(averageOf()).toBe(0);
})

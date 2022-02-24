import sort from '.';

test('sort', () => {
  expect(sort((a, b) => b - a, [5, 3, 1, 2, 4])).toEqual([5, 4, 3, 2, 1]);
  expect(sort((a, b) => a - b, [5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
});

import at from '../../../src/array/at'

test('at', () => {
  expect(at(1, [1, 2, 3, 4, 5])).toBe(2)
})

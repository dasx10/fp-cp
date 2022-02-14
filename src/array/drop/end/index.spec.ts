import dropEnd from '.';

const testArray = [1, 2, 3, 4, 5] as const;

let index = 0;
const drop1 = dropEnd(testArray);
test('drop 1', () => {
  while (index < testArray.length - 1) {
    expect(drop1[index]).toBeDefined();
    expect(drop1[index]).toBe(testArray[index]);
    index++;
  }

  expect(drop1[index + 1]).toBeUndefined();
})

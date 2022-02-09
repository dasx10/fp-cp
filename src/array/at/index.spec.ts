import at from ".";

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
let index: Extract<keyof typeof testArray, number> = -10;
describe('at', () => {
	while (index < 10) {
		test(`at ${index}`, () => {
			expect(at(index, testArray)).toBe(testArray[index]);
		});

		test(`at curry ${index}`, () => {
			expect(at(index)(testArray)).toBe(testArray[index]);
		});
		index++;
	}
})

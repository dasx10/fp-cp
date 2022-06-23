import arrayLikeMap from '.';

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
describe('array like map', () => {
	test('number array', () => {
		const result = arrayLikeMap((value) => value * 10, testArray);
		expect(result).toBeDefined();
		// @ts-ignore
		expect(result === testArray).toBe(false);
		expect(result).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]);
	});
});

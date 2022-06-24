import arrayLikeMapReversCore from '.';

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

describe('array like map revers', () => {
	test('numbers array', () => {
		const result = arrayLikeMapReversCore((e) => e * 10, testArray);
		expect(result).toBeDefined();
		expect(result).toEqual([90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
	})
})

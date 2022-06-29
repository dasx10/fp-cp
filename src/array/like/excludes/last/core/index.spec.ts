import arrayLikeExcludesLastCore from '.';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('excludes', () => {
	test('excludes array', () => {
		const result = arrayLikeExcludesLastCore(11, testArray);
		expect(result).toBeDefined();
		expect(result).toBe(true);
	});

	test('includes array', () => {
		const result = arrayLikeExcludesLastCore(10, testArray);
		expect(result).toBeDefined();
		expect(result).toBe(false);
	});
});

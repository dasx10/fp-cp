import arrayLikeSortCore from '.';
const testArray  = [1, 3, 7, 0, 6, 2, 4, 5, 9, 8];
const numberAsc  = (a: number, b: number) => a - b;
const numberDesc = (a: number, b: number) => b - a;
const ascResult  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const descResult = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

describe('array like sort', () => {
	test('number array unsorted asc', () => {
		const result = arrayLikeSortCore(numberAsc, testArray);
		expect(result).toBeDefined();
		expect(result === testArray).toBe(false);
		expect(result).toEqual(ascResult)
	});

	test('number array unsorted desc', () => {
		const result = arrayLikeSortCore(numberDesc, testArray);
		expect(result).toBeDefined();
		expect(result === testArray).toBe(false);
		expect(result).toEqual(descResult)
	});

	test('number array reversed desc', () => {
		const result = arrayLikeSortCore(numberDesc, ascResult);
		expect(result).toBeDefined();
		expect(result === ascResult).toBe(false);
		expect(result).toEqual(descResult)
	});

	test('number array reversed asc', () => {
		const result = arrayLikeSortCore(numberAsc, descResult);
		expect(result).toBeDefined();
		expect(result === descResult).toBe(false);
		expect(result).toEqual(ascResult)
	});

	test('number array current asc', () => {
		const result = arrayLikeSortCore(numberAsc, ascResult);
		expect(result).toBeDefined();
		expect(result === ascResult).toBe(false);
		expect(result).toEqual(ascResult)
	});

	test('number array current desc', () => {
		const result = arrayLikeSortCore(numberDesc, descResult);
		expect(result).toBeDefined();
		expect(result === descResult).toBe(false);
		expect(result).toEqual(descResult)
	});
});

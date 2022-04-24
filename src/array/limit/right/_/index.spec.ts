import _limitRight from '.';

describe('limit right', () => {
	test('3 vs [5]', () => {
		const result = _limitRight(-3, [1, 2, 3, 4, 5] as const);
		expect(result).toEqual([3, 4, 5]);
	});
	
	test('3 vs [3]', () => {
		const result = _limitRight(-3, [1, 2, 3] as const);
		expect(result).toEqual([1, 2, 3]);
	});

	test('3 vs [1]', () => {
		const result = _limitRight(-3, [1] as const);
		expect(result).toEqual([1]);
	});

	test('3 vs [0]', () => {
		const result = _limitRight(-3, [] as const);
		expect(result.length).toBe(0);
	});
});

import arrayLikeFilterSomeDef from '.';

describe('arrayLikeFilterSomeDef', () => {
	test('array', () => {
		const result = arrayLikeFilterSomeDef([2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7]);
		expect(result).toEqual([2, 4, 6]);
	});
});

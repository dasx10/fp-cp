import arrayLikeFilterIncludesDef from '.';

describe('arrayLikeFilterIncludesDef', () => {
	test('array', () => {
		const result = arrayLikeFilterIncludesDef([2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7]);
		expect(result).toEqual([2, 4, 6]);
	});
});

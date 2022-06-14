import arrayLikeFilterSomeCore from '.';

describe('arrayLikeFilterSomeCore', () => {
	test('array', () => {
		const result = arrayLikeFilterSomeCore([2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7]);
		expect(result).toEqual([2, 4, 6]);
	});
});

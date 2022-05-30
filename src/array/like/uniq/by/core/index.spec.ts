import uniqBy from '.';

describe('uniq', () => {
	describe('string', () => {
		test('through', () => {
			const uniqChars = uniqBy((e) => e, 'aabbccd');
			expect(uniqChars).toBeDefined();
			expect(uniqChars).toEqual(['a', 'b', 'c', 'd']);
		});

		test('property', () => {
			const uniqChars = uniqBy((e) => e.toLowerCase(), 'aAbbBcccCdddd');
			expect(uniqChars).toBeDefined();
			expect(uniqChars).toEqual(['a', 'b', 'c', 'd']);
		});

		test('empty', () => {
			const uniqChars = uniqBy((e) => e, '');
			expect(uniqChars).toBeDefined();
			expect(uniqChars).toEqual([]);
			expect(uniqChars.length).toBe(0);
		});
	});

	describe('array', () => {
		test('through', () => {
			const uniq = uniqBy(e => e, [1, 1, 2, 1, 3, 4, 5, 6, 6, 4, 5, 7, 8, 9, 8, 8, 9]);
			expect(uniq).toBeDefined();
			expect(uniq).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});

		test('empty', () => {
			const uniq = uniqBy(e => e, []);
			expect(uniq).toBeDefined();
			expect(uniq).toEqual([]);
			expect(uniq.length).toEqual(0);
		});
	});
});

import arrayLikeCountValuesCore from "./index";

describe('array like count values', () => {
	describe('use array', () => {
		test('has [1]', () => {
			const resultCount = arrayLikeCountValuesCore([1, 2, 3], [1]);
			expect(resultCount).toBe(1);
		});
	
		test('has [2]', () => {
			const resultCount = arrayLikeCountValuesCore([1, 2, 3], [1, 1]);
			expect(resultCount).toBe(2);
		});
	
		test('has [4]', () => {
			const resultCount = arrayLikeCountValuesCore([1, 2, 3], [1, 1, 2, 3]);
			expect(resultCount).toBe(4);
		});
	
		test('has [4]', () => {
			const resultCount = arrayLikeCountValuesCore([1, 2, 3], [1, 1, 21, 31]);
			expect(resultCount).toBe(2);
		});
	
		test('not has [2]', () => {
			const resultCount = arrayLikeCountValuesCore([2, 3, 4], [1, 1]);
			expect(resultCount).toBe(0);
		});
	
		test('not has [2]', () => {
			const resultCount = arrayLikeCountValuesCore([2, 3, 4], [1]);
			expect(resultCount).toBe(0);
		});
	
		test('not has empty', () => {
			const resultCount = arrayLikeCountValuesCore([2, 3, 4], []);
			expect(resultCount).toBe(0);
		});
	});
	
	describe('use string', () => {
		test('has a b', () => {
			const resultCount = arrayLikeCountValuesCore(['a', 'b'], 'banana');
			expect(resultCount).toBe(4);
		});

		test('has a no has c', () => {
			const resultCount = arrayLikeCountValuesCore(['a', 'c'], 'banana');
			expect(resultCount).toBe(3);
		});

		test('no has', () => {
			const resultCount = arrayLikeCountValuesCore(['u', 'c'], 'banana');
			expect(resultCount).toBe(0);
		});

		test('no has 1 char', () => {
			const resultCount = arrayLikeCountValuesCore(['u', 'c'], 'b');
			expect(resultCount).toBe(0);
		});

		test('has 1 char', () => {
			const resultCount = arrayLikeCountValuesCore(['u', 'b'], 'b');
			expect(resultCount).toBe(1);
		});

		test('has 2 char', () => {
			const resultCount = arrayLikeCountValuesCore(['u', 'b'], 'bb');
			expect(resultCount).toBe(2);

			const resultCount2 = arrayLikeCountValuesCore(['u', 'b'], 'ba');
			expect(resultCount2).toBe(1);
		});

		test('empty', () => {
			const resultCount = arrayLikeCountValuesCore(['u', 'b'], '');
			expect(resultCount).toBe(0);
		});
	});
});

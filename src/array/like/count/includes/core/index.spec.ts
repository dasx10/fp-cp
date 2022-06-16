import arrayLikeCountIncludesCore from "./index";

describe('array like count values', () => {
	describe('use array', () => {
		test('has [1]', () => {
			const resultCount = arrayLikeCountIncludesCore([1, 2, 3], [1]);
			expect(resultCount).toBe(1);
		});
	
		test('has [2]', () => {
			const resultCount = arrayLikeCountIncludesCore([1, 2, 3], [1, 1]);
			expect(resultCount).toBe(2);
		});
	
		test('has [4]', () => {
			const resultCount = arrayLikeCountIncludesCore([1, 2, 3], [1, 1, 2, 3]);
			expect(resultCount).toBe(4);
		});
	
		test('has [4]', () => {
			const resultCount = arrayLikeCountIncludesCore([1, 2, 3], [1, 1, 21, 31]);
			expect(resultCount).toBe(2);
		});
	
		test('not has [2]', () => {
			const resultCount = arrayLikeCountIncludesCore([2, 3, 4], [1, 1]);
			expect(resultCount).toBe(0);
		});
	
		test('not has [2]', () => {
			const resultCount = arrayLikeCountIncludesCore([2, 3, 4], [1]);
			expect(resultCount).toBe(0);
		});
	
		test('not has empty', () => {
			const resultCount = arrayLikeCountIncludesCore([2, 3, 4], []);
			expect(resultCount).toBe(0);
		});
	});
	
	describe('use string', () => {
		test('has a b', () => {
			const resultCount = arrayLikeCountIncludesCore(['a', 'b'], 'banana');
			expect(resultCount).toBe(4);
		});

		test('has a no has c', () => {
			const resultCount = arrayLikeCountIncludesCore(['a', 'c'], 'banana');
			expect(resultCount).toBe(3);
		});

		test('no has', () => {
			const resultCount = arrayLikeCountIncludesCore(['u', 'c'], 'banana');
			expect(resultCount).toBe(0);
		});

		test('no has 1 char', () => {
			const resultCount = arrayLikeCountIncludesCore(['u', 'c'], 'b');
			expect(resultCount).toBe(0);
		});

		test('has 1 char', () => {
			const resultCount = arrayLikeCountIncludesCore(['u', 'b'], 'b');
			expect(resultCount).toBe(1);
		});

		test('has 2 char', () => {
			const resultCount = arrayLikeCountIncludesCore(['u', 'b'], 'bb');
			expect(resultCount).toBe(2);

			const resultCount2 = arrayLikeCountIncludesCore(['u', 'b'], 'ba');
			expect(resultCount2).toBe(1);
		});

		test('empty', () => {
			const resultCount = arrayLikeCountIncludesCore(['u', 'b'], '');
			expect(resultCount).toBe(0);
		});
	});
});

import arrayLikeAtLeftCore from ".";

const testArrayLike = {
	0      : 1,
	1      : 2,
	2      : 3,
	length : 3,
} as const;

describe('arrayLikeAtLeftCore', () => {
	describe('correct index', () => {
		test('has', () => {
			const result = arrayLikeAtLeftCore(0, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});

		test('no has', () => {
			expect(arrayLikeAtLeftCore(3, testArrayLike)).toBeUndefined();
		});
	});

	describe('object index', () => {
		test('has', () => {
			const index = new Number;
			const result = arrayLikeAtLeftCore(index as number, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});
	});

	describe('string index', () => {
		test('has', () => {
			const index = String(0);
			const result = arrayLikeAtLeftCore(index as unknown as number, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});
	});

	describe('invalid index', () => {
		test('conceptual', () => {
			const result = arrayLikeAtLeftCore(-1 as number, testArrayLike);
			expect(result).toBeUndefined();
		});

		test('no conceptual', () => {
			expect(arrayLikeAtLeftCore(-3 as number, testArrayLike)).toBeUndefined();
		});
	});

	describe('no index', () => {
		test('no conceptual', () => {
			[undefined, null, NaN].forEach((invalidIndex) => {
				expect(arrayLikeAtLeftCore(invalidIndex, testArrayLike)).toBeUndefined();
			});
		});
	});
});

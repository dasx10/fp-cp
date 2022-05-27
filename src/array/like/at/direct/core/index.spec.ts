import arrayLikeAtDirectCore from ".";

const testArrayLike = {
	0      : 1,
	1      : 2,
	2      : 3,
} as const;

describe('arrayLikeAtLeftCore', () => {
	describe('correct index', () => {
		test('has', () => {
			const result = arrayLikeAtDirectCore(0, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});

		test('no has', () => {
			// @ts-ignore
			expect(arrayLikeAtDirectCore(3, testArrayLike)).toBeUndefined();
		});
	});

	describe('object index', () => {
		test('has', () => {
			const index = new Number;
			// @ts-ignore
			const result = arrayLikeAtDirectCore(index as number, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});
	});

	describe('string index', () => {
		test('has', () => {
			const index = String(0);
			// @ts-ignore
			const result = arrayLikeAtDirectCore(index as unknown as number, testArrayLike);
			expect(result).toBeDefined();
			expect(result).toBe(testArrayLike[0])
		});
	});

	describe('invalid index', () => {
		test('conceptual', () => {
			// @ts-ignore
			const result = arrayLikeAtDirectCore(-1 as number, testArrayLike);
			expect(result).toBeUndefined();
		});

		test('no conceptual', () => {
			// @ts-ignore
			expect(arrayLikeAtDirectCore(-3 as number, testArrayLike)).toBeUndefined();
		});
	});

	describe('no index', () => {
		test('no conceptual', () => {
			[undefined, null, NaN].forEach((invalidIndex) => {
				// @ts-ignore
				expect(arrayLikeAtDirectCore(invalidIndex, testArrayLike)).toBeUndefined();
			});
		});
	});
});

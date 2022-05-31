import arrayLikeFilterCore from ".";

const checkResult = (filtered: readonly unknown[]) => {
	expect(filtered).toBeDefined();
	expect(typeof filtered).toBe('object');
	expect(Array.isArray(filtered)).toBe(true);
}

describe('filter', () => {
	describe('string', () => {
		test('empty', () => {
			const filtered = arrayLikeFilterCore((e) => true, '' as const);
			checkResult(filtered);
			expect(filtered.length).toBe(0);
		});

		test('no empty any a', () => {
			const filtered = arrayLikeFilterCore((e): e is 'a' => e === 'a', 'aabbccdd' as const);
			checkResult(filtered);
			expect(filtered.length).toBe(2);
			expect(filtered).toEqual(['a', 'a']);
		});

		test('no empty any result', () => {
			const filtered = arrayLikeFilterCore((e): e is 'a' | 'A' => e.toLowerCase() === 'a', 'aAbBcCdD' as const);
			checkResult(filtered);
			expect(filtered.length).toBe(2);
			expect(filtered).toEqual(['a', 'A']);
		});

		test('no empty false result', () => {
			const filtered = arrayLikeFilterCore((e) => e.toLowerCase() === 'x', 'aAbBcCdD');
			checkResult(filtered);
			expect(filtered.length).toBe(0);
		});
	});

	describe('array', () => {
		test('empty', () => {
			const filtered = arrayLikeFilterCore((e) => true, [] as const);
			checkResult(filtered);
			expect(filtered.length).toBe(0);
		});

		test('no empty any a', () => {
			const filtered = arrayLikeFilterCore((e): e is 'a' => e === 'a', ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'] as const);
			checkResult(filtered);
			expect(filtered.length).toBe(2);
			expect(filtered).toEqual(['a', 'a']);
		});

		test('no empty any result', () => {
			const filtered = arrayLikeFilterCore((e): e is 'a' | 'A' => e.toLowerCase() === 'a', ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D'] as const);
			checkResult(filtered);
			expect(filtered.length).toBe(2);
			expect(filtered).toEqual(['a', 'A']);
		});
	});

	describe('array like int', () => {
		const arrayLikes = [
			Int32Array,
			Int16Array,
			Int8Array,
			Uint32Array,
			Uint16Array,
			Uint8Array,
		] as const;
		const testArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5] as const;
		test('empty', () => {
			const thisTest = (filtered: number[]) => {
				checkResult(filtered);
				expect(filtered.length).toBe(0);
			}
			arrayLikes.forEach((Instance) => thisTest(arrayLikeFilterCore((e) => true, new Instance)));
		});

		test('no empty any a', () => {
			const thisTest = (filtered: Array<1>) => {
				checkResult(filtered);
				expect(filtered.length).toBe(2);
				expect(filtered).toEqual([1, 1]);
			}
			arrayLikes.forEach((Instance) => thisTest(arrayLikeFilterCore((e): e is 1 => e === 1, new Instance(testArray))));
		});

		test('no empty any result', () => {
			const thisTest = (filtered: Array<1 | 2>) => {
				checkResult(filtered);
				expect(filtered.length).toBe(4);
				expect(filtered).toEqual([1, 1, 2, 2]);
			}
			arrayLikes.forEach((Instance) => thisTest(arrayLikeFilterCore((e): e is 1 | 2 => e === 1 || e === 2, new Instance(testArray))));
		});
	});
});

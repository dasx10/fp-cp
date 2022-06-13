import arrayLikeCountDef from '.';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;
const testString = '1234567890' as const;

const instances = [
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

describe('arrayLike at direct', () => {
	describe('direct', () => {
		describe('array', () => {
			test('has', () => {
				const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, testArray);
				expect(count).toBeDefined();
				expect(count).toBe(5);
			});

			test('one rejected', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, [1] as const);
				expect(count).toBeDefined();
				expect(count).toBe(0);
			});

			test('one accepted', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, [2] as const);
				expect(count).toBeDefined();
				expect(count).toBe(1);
			});

			test('empty', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, [] as const);
				expect(count).toBeDefined();
				expect(count).toBe(0);
			});
		});

		describe('chars', () => {
			test(`has`, () => {
				const count = arrayLikeCountDef((value): value is '0' | '2' | '4' | '6' | '8' => +value % 2 === 0, testString);
				expect(count).toBeDefined();
				expect(count).toBe(5);
			});

			test('one rejected', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is '0' | '2' | '4' | '6' | '8' => +value % 2 === 0, '1' as const);
				expect(count).toBeDefined();
				expect(count).toBe(0);
			});

			test('one accepted', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is '0' | '2' | '4' | '6' | '8' => +value % 2 === 0, '2' as const);
				expect(count).toBeDefined();
				expect(count).toBe(1);
			});

			test('empty', () => {
				// @ts-ignore
				const count = arrayLikeCountDef((value): value is '0' | '2' | '4' | '6' | '8' => +value % 2 === 0, '' as const);
				expect(count).toBeDefined();
				expect(count).toBe(0);
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				test('has', () => {
					const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, testTypedArray);
					expect(count).toBeDefined();
					expect(count).toBe(5);
				});
	
				test('one rejected', () => {
					const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, new instance([1]));
					expect(count).toBeDefined();
					expect(count).toBe(0);
				});

				test('one accepted', () => {
					const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, new instance([2]));
					expect(count).toBeDefined();
					expect(count).toBe(1);
				});
	
				test('empty', () => {
					const count = arrayLikeCountDef((value): value is 0 | 2 | 4 | 6 | 8 => value % 2 === 0, new instance);
					expect(count).toBeDefined();
					expect(count).toBe(0);
				});
			});
		});
	});
});

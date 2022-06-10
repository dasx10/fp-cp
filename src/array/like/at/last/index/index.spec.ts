import arrayLikeAtLastIndexCore from './index';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const testString = 'Kleschev Yevhenii' as const;
const instances = [
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
];


describe('last', () => {
	describe('array', () => {
		test('has', () => {
			const lastIndex = arrayLikeAtLastIndexCore(testArray);
			expect(lastIndex).toBeDefined();
			expect(lastIndex).toBe(testArray.length - 1);
			expect(lastIndex).toBe(9);
		});

		test('empty', () => {
			const lastIndex = arrayLikeAtLastIndexCore([]);
			expect(lastIndex).toBeUndefined();
		});
	});

	describe('string', () => {
		test('has', () => {
			const lastIndex = arrayLikeAtLastIndexCore(testString);
			expect(lastIndex).toBeDefined();
			expect(lastIndex).toBe(testString.length - 1);
			expect(lastIndex).toBe(16);
		});

		test('empty', () => {
			const lastIndex = arrayLikeAtLastIndexCore('' as const);
			expect(lastIndex).toBeUndefined();
		});
	});

	instances.forEach((instance) => {
		describe(instance.name, () => {
			const testTypedArray = new instance(testArray);
			test('has', () => {
				const lastIndex = arrayLikeAtLastIndexCore(testTypedArray);
				expect(lastIndex).toBeDefined();
				expect(lastIndex).toBe(testTypedArray.length - 1);
			});
	
			test('empty', () => {
				const lastIndex = arrayLikeAtLastIndexCore(new instance([]));
				expect(lastIndex).toBeUndefined();
			});
		});
	});
});

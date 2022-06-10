import arrayLikeAtLastCore from '.';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const testString = 'Kleschev Yevhenii';
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
			const lastValue = arrayLikeAtLastCore(testArray);
			expect(lastValue).toBeDefined();
			expect(lastValue).toBe(testArray[testArray.length - 1])
		});

		test('empty', () => {
			const lastValue = arrayLikeAtLastCore([]);
			expect(lastValue).toBeUndefined();
		});
	});

	describe('string', () => {
		test('has', () => {
			const lastValue = arrayLikeAtLastCore(testString);
			expect(lastValue).toBeDefined();
			expect(lastValue).toBe(testString[testString.length - 1])
		});

		test('empty', () => {
			const lastValue = arrayLikeAtLastCore('');
			expect(lastValue).toBeUndefined();
		});
	});

	instances.forEach((instance) => {
		describe(instance.name, () => {
			const testTypedArray = new instance(testArray);
			test('has', () => {
				const lastValue = arrayLikeAtLastCore(testTypedArray);
				expect(lastValue).toBeDefined();
				expect(lastValue).toBe(testTypedArray[testTypedArray.length - 1])
			});
	
			test('empty', () => {
				const lastValue = arrayLikeAtLastCore(new instance([]));
				expect(lastValue).toBeUndefined();
			});
		});
	});
});

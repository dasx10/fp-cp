import arrayLikeAtLastEntryCore from '.';

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
			const lastEntry = arrayLikeAtLastEntryCore(testArray);
			const [lastIndex, lastValue] = lastEntry;
			expect(lastIndex).toBeDefined();
			expect(lastValue).toBeDefined();
			expect(lastIndex).toBe(testArray.length - 1);
			expect(lastValue).toBe(testArray[lastIndex]);
		});

		test('empty', () => {
			const lastEntry = arrayLikeAtLastEntryCore([]);
			expect(lastEntry).toBeUndefined();
		});
	});

	describe('string', () => {
		test('has', () => {
			const lastEntry = arrayLikeAtLastEntryCore(testString);
			const [lastIndex, lastValue] = lastEntry;
			expect(lastIndex).toBeDefined();
			expect(lastValue).toBeDefined();
			expect(lastIndex).toBe(testString.length - 1);
			expect(lastValue).toBe(testString[lastIndex]);
		});

		test('empty', () => {
			const lastEntry = arrayLikeAtLastEntryCore('');
			expect(lastEntry).toBeUndefined();
		});
	});

	instances.forEach((instance) => {
		describe(instance.name, () => {
			const testTypedArray = new instance(testArray);
			test('has', () => {
				const lastEntry = arrayLikeAtLastEntryCore(testTypedArray);
				const [lastIndex, lastValue] = lastEntry as [number, number];
				expect(lastIndex).toBeDefined();
				expect(lastValue).toBeDefined();
				expect(lastIndex).toBe(testTypedArray.length - 1);
				expect(lastValue).toBe(testTypedArray[lastIndex]);
			});
	
			test('empty', () => {
				const lastEntry = arrayLikeAtLastEntryCore(new instance([]));
				expect(lastEntry).toBeUndefined();
			});
		});
	});
});

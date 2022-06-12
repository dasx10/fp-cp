import arrayLikeSliceCore from '.';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;

const testString = 'Kleschev Yevhenii';

const instances = [
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

describe('array like slice', () => {
	test('array', () => {
		const result = arrayLikeSliceCore(0, 5, testArray);
		expect(result).toBeDefined();
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});
});

import arrayLikeAtRandomCore from '.';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;
const testString = 'Kleschev Yevhenii' as const;

const instances = [
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
];


const repeat = (cb: (count: number) => unknown) => {
	let count = 0
	while (count < 100) {
		cb(count);
		count++;
	}
};

describe('arrayLike at random', () => {
	describe('array', () => {
		repeat((count) => {
			test(`no empty try ${count}`, () => {
				const randomValue = arrayLikeAtRandomCore(testArray);
				expect(randomValue).toBeDefined();
				expect(testArray.includes(randomValue)).toBe(true);
			});
		});
		
		test('one', () => {
			const randomValue = arrayLikeAtRandomCore([1] as const);
			expect(randomValue).toBeDefined();
			expect(randomValue).toBe(1);
		});

		test('empty', () => {
			const randomValue = arrayLikeAtRandomCore([] as const);
			expect(randomValue).toBeUndefined();
		});
	});

	describe('string', () => {
		repeat((count) => {
			test(`no empty try ${count}`, () => {
				const randomValue = arrayLikeAtRandomCore(testString);
				expect(randomValue).toBeDefined();
				expect(testString.includes(randomValue)).toBe(true);
			});
		});
		
		test('one', () => {
			const randomValue = arrayLikeAtRandomCore('J' as const);
			expect(randomValue).toBeDefined();
			expect(randomValue).toBe('J');
		});

		test('empty', () => {
			const randomValue = arrayLikeAtRandomCore('' as const);
			expect(randomValue).toBeUndefined();
		});
	});

	instances.forEach(instance => {
		const testTypedArray = new instance(testArray);
		repeat((count) => {
			test(`no empty try ${count}`, () => {
				const randomValue = arrayLikeAtRandomCore(testTypedArray) as number;
				expect(randomValue).toBeDefined();
				expect(testTypedArray.includes(randomValue)).toBe(true);
			});
		});

		test('one', () => {
			const randomValue = arrayLikeAtRandomCore(new instance([1]));
			expect(randomValue).toBeDefined();
			expect(randomValue).toBe(1);
		});

		test('empty', () => {
			const randomValue = arrayLikeAtRandomCore(new instance([]));
			expect(randomValue).toBeUndefined();
		});
	});
});

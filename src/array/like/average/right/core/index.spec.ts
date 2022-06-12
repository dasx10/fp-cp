import arrayLikeAverageRightCore from '.';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;
const testString = '1234567890';

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
				const average = arrayLikeAverageRightCore((value) => value, testArray);
				expect(average).toBeDefined();
				expect(average).toBe(4.5);
			});

			test('one', () => {
				const average = arrayLikeAverageRightCore((value) => value, [1]);
				expect(average).toBeDefined();
				expect(average).toBe(1);
			});

			test('empty', () => {
				const average = arrayLikeAverageRightCore((value) => value, []);
				expect(average).toBeDefined();
				expect(average).toBe(0);
			});
		});

		describe('chars', () => {
			test(`has`, () => {
				const average = arrayLikeAverageRightCore((value) => +value, testString);
				expect(average).toBeDefined();
				expect(average).toBe(4.5);
			});

			test('one', () => {
				const average = arrayLikeAverageRightCore((value) => +value, testString[0]);
				expect(average).toBeDefined();
				expect(average).toBe(1);
			});

			test('empty', () => {
				const average = arrayLikeAverageRightCore((value) => +value, '' as const);
				expect(average).toBeDefined();
				expect(average).toBe(0);
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				test('has', () => {
					const average = arrayLikeAverageRightCore((value) => value, testTypedArray);
					expect(average).toBeDefined();
					expect(average).toBe(4.5);
				});
	
				test('one', () => {
					const average = arrayLikeAverageRightCore((value) => value, new instance([1]));
					expect(average).toBeDefined();
					expect(average).toBe(1);
				});
	
				test('empty', () => {
					const average = arrayLikeAverageRightCore((value) => value, new instance);
					expect(average).toBeDefined();
					expect(average).toBe(0);
				});
			});
		});
	});
});

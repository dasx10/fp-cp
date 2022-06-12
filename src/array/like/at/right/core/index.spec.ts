import arrayLikeAtRightCore from '.';

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

describe('arrayLike at direct', () => {
	describe('direct', () => {
		describe('array', () => {
			testArray.forEach((_, index) => {
				const value = testArray[testArray.length + ~index];
				test(`has ${value}`, () => {
					const atValue = arrayLikeAtRightCore(index, testArray);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(value);
				});
			});
	
			test('no has', () => {
				const atValue = arrayLikeAtRightCore(testArray.length, testArray);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightCore(0, []);
				expect(atValue).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const char = testString[testString.length + ~index];
				test(`has ${char}`, () => {
					const atValue = arrayLikeAtRightCore(index, testString);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(char);
				});
			}

			test('no has', () => {
				const atValue = arrayLikeAtRightCore(testString.length, testString);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightCore(0, '');
				expect(atValue).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((_, index) => {
					const value = testArray[testArray.length + ~index];
					test(`has ${value}`, () => {
						const atValue = arrayLikeAtRightCore(index, testTypedArray);
						expect(atValue).toBeDefined();
						expect(atValue).toBe(value);
					});
				});

				test('no has', () => {
					const atValue = arrayLikeAtRightCore(testTypedArray.length, testTypedArray);
					expect(atValue).toBeUndefined();
				});

				test('empty', () => {
					const atValue = arrayLikeAtRightCore(0, new instance([]));
					expect(atValue).toBeUndefined();
				});
			});
		});
	});
});


describe('arrayLike at invert', () => {
	describe('direct', () => {
		describe('array', () => {
			testArray.forEach((value, index) => {
				const invertIndex = ~index;
				test(`has ${value}`, () => {
					const atValue = arrayLikeAtRightCore(invertIndex, testArray);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(value);
				});
			});
	
			test('no has', () => {
				const atValue = arrayLikeAtRightCore(~testArray.length, testArray);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightCore(-1, []);
				expect(atValue).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const invertIndex = ~index;
				const char = testString[index];
				test(`has ${char}`, () => {
					const atValue = arrayLikeAtRightCore(invertIndex, testString);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(char);
				});
			}

			test('no has', () => {
				const atValue = arrayLikeAtRightCore(~testString.length, testString);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightCore(-1, '');
				expect(atValue).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((value, index) => {
					const invertIndex = ~index;
					test(`has ${value}`, () => {
						const atValue = arrayLikeAtRightCore(invertIndex, testTypedArray);
						expect(atValue).toBeDefined();
						expect(atValue).toBe(value);
					});
				});
		
				test('no has', () => {
					const atValue = arrayLikeAtRightCore(~testTypedArray.length, testTypedArray);
					expect(atValue).toBeUndefined();
				});

				test('empty', () => {
					const atValue = arrayLikeAtRightCore(-1, new instance([]));
					expect(atValue).toBeUndefined();
				});
			});
		});
	});
});

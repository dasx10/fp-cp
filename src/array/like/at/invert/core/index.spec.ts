import arrayLikeAtInvertCore from '.';

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

describe('arrayLike at invert', () => {
	describe('direct', () => {
		describe('array', () => {
			testArray.forEach((_, index) => {
				const invertIndex = ~index;
				const value = testArray[testArray.length + invertIndex];
				test(`has ${value}`, () => {
					const atValue = arrayLikeAtInvertCore(invertIndex, testArray);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(value);
				});
			});
	
			test('no has', () => {
				const atValue = arrayLikeAtInvertCore(~testArray.length, testArray);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtInvertCore(-1, []);
				expect(atValue).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const invertIndex = ~index;
				const char = testString[testString.length + invertIndex];
				test(`has ${char}`, () => {
					const atValue = arrayLikeAtInvertCore(invertIndex, testString);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(char);
				});
			}

			test('no has', () => {
				const atValue = arrayLikeAtInvertCore(~testString.length, testString);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtInvertCore(-1, '');
				expect(atValue).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((_, index) => {
					const invertIndex = ~index;
					const value = testTypedArray[testTypedArray.length + invertIndex];
					test(`has ${value}`, () => {
						const atValue = arrayLikeAtInvertCore(invertIndex, testTypedArray);
						expect(atValue).toBeDefined();
						expect(atValue).toBe(value);
					});
				});
		
				test('no has', () => {
					const atValue = arrayLikeAtInvertCore(~testTypedArray.length, testTypedArray);
					expect(atValue).toBeUndefined();
				});

				test('empty', () => {
					const atValue = arrayLikeAtInvertCore(-1, new instance([]));
					expect(atValue).toBeUndefined();
				});
			});
		});
	});
});

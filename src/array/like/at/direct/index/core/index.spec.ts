import arrayLikeAtDirectIndexCore from '.';

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
			testArray.forEach((value, index) => {
				test(`has ${value}`, () => {
					const atIndex = arrayLikeAtDirectIndexCore(index, testArray);
					expect(atIndex).toBeDefined();
					expect(atIndex).toBe(index);
				});
			});
	
			test('no has', () => {
				const atIndex = arrayLikeAtDirectIndexCore(testArray.length, testArray);
				expect(atIndex).toBeUndefined();
			});

			test('empty', () => {
				const atIndex = arrayLikeAtDirectIndexCore(0, []);
				expect(atIndex).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const char = testString[index];
				test(`has ${char}`, () => {
					const atIndex = arrayLikeAtDirectIndexCore(index, testString);
					expect(atIndex).toBeDefined();
					expect(atIndex).toBe(index);
				});
			}

			test('no has', () => {
				const atIndex = arrayLikeAtDirectIndexCore(testString.length, testString);
				expect(atIndex).toBeUndefined();
			});

			test('empty', () => {
				const atIndex = arrayLikeAtDirectIndexCore(0, '');
				expect(atIndex).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((value, index) => {
					test(`has ${value}`, () => {
						const atIndex = arrayLikeAtDirectIndexCore(index, testTypedArray);
						expect(atIndex).toBeDefined();
						expect(atIndex).toBe(index);
					});
				});

				test('no has', () => {
					const atIndex = arrayLikeAtDirectIndexCore(testTypedArray.length, testTypedArray);
					expect(atIndex).toBeUndefined();
				});

				test('empty', () => {
					const atIndex = arrayLikeAtDirectIndexCore(0, new instance([]));
					expect(atIndex).toBeUndefined();
				});
			});
		});
	});
});

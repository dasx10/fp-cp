import { __ } from '../../../../..';
import arrayLikeAtRightDef from './index';

const testArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;
const testString = 'Kleschev Yevhenii';

const _ = {[Symbol.for('placeholder')]:true} as __;

const instances = [
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
];

describe('arrayLike test fn', () => {
	test('type one', () => {
		const last = arrayLikeAtRightDef(0);
		expect(typeof last).toBe('function');
	});

	test('type 2', () => {
		const last = arrayLikeAtRightDef(_, [1, 2]);
		expect(typeof last).toBe('function');
	});

	test('type one', () => {
		const last = arrayLikeAtRightDef(0);
		expect(last([1, 2, 3])).toBe(3);
	});

	test('type 2 0', () => {
		const last = arrayLikeAtRightDef(_, [1, 2, 3]);
		expect(last(0)).toBe(3);
	});
});

describe('arrayLike at direct', () => {
	describe('direct', () => {
		describe('array', () => {
			testArray.forEach((_, index) => {
				const value = testArray[testArray.length + ~index];
				test(`has ${value}`, () => {
					const atValue = arrayLikeAtRightDef(index, testArray);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(value);
				});
			});
	
			test('no has', () => {
				const atValue = arrayLikeAtRightDef(testArray.length, testArray);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightDef(0, []);
				expect(atValue).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const char = testString[testString.length + ~index];
				test(`has ${char}`, () => {
					const atValue = arrayLikeAtRightDef(index, testString);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(char);
				});
			}

			test('no has', () => {
				const atValue = arrayLikeAtRightDef(testString.length, testString);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightDef(0, '');
				expect(atValue).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((_, index) => {
					const value = testArray[testArray.length + ~index];
					test(`has ${value}`, () => {
						const atValue = arrayLikeAtRightDef(index, testTypedArray);
						expect(atValue).toBeDefined();
						expect(atValue).toBe(value);
					});
				});

				test('no has', () => {
					const atValue = arrayLikeAtRightDef(testTypedArray.length, testTypedArray);
					expect(atValue).toBeUndefined();
				});

				test('empty', () => {
					const atValue = arrayLikeAtRightDef(0, new instance([]));
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
					const atValue = arrayLikeAtRightDef(invertIndex, testArray);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(value);
				});
			});
	
			test('no has', () => {
				const atValue = arrayLikeAtRightDef(~testArray.length, testArray);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightDef(-1, []);
				expect(atValue).toBeUndefined();
			});
		});

		describe('chars', () => {
			for (let index = 0; index < testString.length; index++) {
				const invertIndex = ~index;
				const char = testString[index];
				test(`has ${char}`, () => {
					const atValue = arrayLikeAtRightDef(invertIndex, testString);
					expect(atValue).toBeDefined();
					expect(atValue).toBe(char);
				});
			}

			test('no has', () => {
				const atValue = arrayLikeAtRightDef(~testString.length, testString);
				expect(atValue).toBeUndefined();
			});

			test('empty', () => {
				const atValue = arrayLikeAtRightDef(-1, '');
				expect(atValue).toBeUndefined();
			});
		});

		instances.forEach(instance => {
			describe(instance.name, () => {
				const testTypedArray = new instance(testArray);
				testTypedArray.forEach((value, index) => {
					const invertIndex = ~index;
					test(`has ${value}`, () => {
						const atValue = arrayLikeAtRightDef(invertIndex, testTypedArray);
						expect(atValue).toBeDefined();
						expect(atValue).toBe(value);
					});
				});
		
				test('no has', () => {
					const atValue = arrayLikeAtRightDef(~testTypedArray.length, testTypedArray);
					expect(atValue).toBeUndefined();
				});

				test('empty', () => {
					const atValue = arrayLikeAtRightDef(-1, new instance([]));
					expect(atValue).toBeUndefined();
				});
			});
		});
	});
});

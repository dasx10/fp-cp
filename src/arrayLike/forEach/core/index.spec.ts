import forEachCore from "./index";
import testArray   from "./index.json";

let testIndex = 0;

describe('forEachCore', () => {
	test('index', () => {
		testIndex = 0;
		forEachCore((value, index) => {
			expect(index).toBeDefined();
			expect(index).toBe(testIndex);
			testIndex++;
		}, testArray);
	});

	test('value', () => {
		forEachCore((value, index) => {
			expect(value).toBeDefined();
			expect(value).toBe(index + 1);
		}, testArray);
	});

	test('array', () => {
		forEachCore((value, index, array) => {
			expect(array).toBeDefined();
			expect(array[index]).toBeDefined();
			expect(array[index]).toBe(value);
			expect(array).toEqual(testArray);
		}, testArray);
	});

	test('result', () => {
		expect(forEachCore(value => value, testArray)).toBeUndefined();
	})
});

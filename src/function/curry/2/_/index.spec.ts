import _curry2 from '.';

const testDef = (a: string, b: number) => a + b; 

describe('_curry2', () => {
	test('type', () => {
		const newF = _curry2(testDef);
		expect(typeof newF).toBe('function');
	});

	test('length', () => {
		const newF = _curry2(testDef);
		expect(newF.length).toBe(2);
	});

	test('next', () => {
		const newF = _curry2(testDef);
		expect(typeof newF('')).toBe('function');
	});

	test('result', () => {
		const newF = _curry2(testDef);
		expect(newF('', 1)).toBe('1');
	});
});

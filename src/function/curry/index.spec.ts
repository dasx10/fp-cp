import curry from ".";

const testFunction = (a: string, b: number, c: boolean) => a + b + c;

export default describe('curry function', () => {
	test('is function next', () => {
		return expect(typeof curry(testFunction)).toBe('function');
	});

	test('is function next and first param', () => {
		return expect(typeof curry(testFunction, '2')).toBe('function');
	});

	test('is function next and second param', () => {
		return expect(typeof curry(testFunction, '2', 2)).toBe('function');
	});

	test('is function next and first param to fn', () => {
		return expect(typeof curry(testFunction)('2')).toBe('function');
	});

	test('is function next and first and second param to fn', () => {
		return expect(typeof curry(testFunction)('2')(2)).toBe('function');
	});

	test('is function next and second param to fn', () => {
		return expect(typeof curry(testFunction, '2')(2)).toBe('function');
	});

	test('is function next return data', () => {
		return expect(typeof curry(testFunction, '2')(2)(false)).toBe('string');
	});
});

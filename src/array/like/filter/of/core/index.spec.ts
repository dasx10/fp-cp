import arrayLikeFilterOfCore from './index';

const testArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] as const;

describe('find of', () => {
	test('array', () => {
		const data = arrayLikeFilterOfCore(1, testArray);
		expect(data).toEqual([1, 1]);
	});
});

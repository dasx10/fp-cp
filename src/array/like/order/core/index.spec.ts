import arrayLikeOrderCore from '.';

describe('order', () => {
	test('strings array', () => {
		const result = arrayLikeOrderCore((e) => e, ['d', 'b', 'a', 'c', 'j', 'f', 'z']);
		expect(result.join('')).toBe('abcdfjz');
	});
});

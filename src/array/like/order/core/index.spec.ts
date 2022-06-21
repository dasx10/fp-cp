import arrayLikeOrderCore from '.';

class Email extends String {
	constructor(value) {
		super(value);
	}
}

describe('order', () => {
	test('any array', () => {
		const result = arrayLikeOrderCore((e) => e, [
			new Date, 'user',
			// 2, 0, 'd', null, 'b', 'a', 4, 'c', 'j', 'f', 'z', 1, true,
			new Email("test3"), new Email("test2")
		]);
		expect(result).toBe('abcdfjz');
	});

	// test('any array', () => {
	// 	const result = arrayLikeOrderCore((e) => e, [new Date, new Date (222222222222)]);
	// 	expect(result).toBe('abcdfjz');
	// });
});

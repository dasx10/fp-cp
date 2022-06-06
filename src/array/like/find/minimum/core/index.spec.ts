import arrayLikeFindMinimumCore from "./index";

describe('arrayLikeMinimum', () => {
	test('minimum', () => {
		const result = arrayLikeFindMinimumCore((e) => e.length, ['Dog', 'User', 'Be', 'sheep']);
		expect(result).toBe('Be');
	})
});

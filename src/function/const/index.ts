/**
 * @param {Value} value
 * @returns {() => Value}
 * @template Value
 */
const constanta = <Value>(value: Value) => () => value;
export default Object.assign(constanta, {
	yes: constanta(true  as const),
	no : constanta(false as const),
});

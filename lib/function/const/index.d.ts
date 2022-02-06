/**
 * @param {Value} value
 * @returns {() => Value}
 * @template Value
 */
declare function constanta<Value>(value: Value): () => Value;
export default constanta;

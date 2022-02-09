/**
 * @param {Value} value
 * @returns {() => Value}
 * @template Value
 */
function constanta <Value>(value: Value): () => Value {
  return function (): Value {
    return value;
  };
}

export default constanta;

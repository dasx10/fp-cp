/**
 * @param {Value} value
 * @returns {() => Value}
 * @template Value
 */
function constanta <Value>(value: Value) {
  return function () {
    return value;
  };
}

export default constanta;

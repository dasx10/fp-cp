/**
 * @type {<Value extends string>(value: Value) => Lowercase<Value>}
 */
 const lowercase = String.prototype.toLowerCase.call
 module.exports = lowercase;
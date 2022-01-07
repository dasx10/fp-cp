/**
 * @type {(string: string) => string}
 */
const trim = String.prototype.trim.call;
module.exports = trim;
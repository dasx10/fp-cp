/**
 * @param {string} string
 * @returns {boolean}
 */
function isUpper(string: string) {
  return string.toLowerCase() !== string && string.toUpperCase() === string;
}

export default isUpper;

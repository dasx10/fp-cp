/**
 * @param {string} string
 * @returns {boolean}
 */
function isLower(string: string) {
  return string.toUpperCase() !== string && string.toLowerCase() === string;
}

export default isLower;

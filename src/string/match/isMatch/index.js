/**
 * @param {string | RegExp} searchValue
 * @returns {(string: string) => boolean}
 */
function isMatch (searchValue) {
    return function useIsMatch (string) {
        return Boolean(string.match(searchValue));
    }
}

module.exports = isMatch;
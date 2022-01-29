/**
 * 
 * @param {string | RegExp} searchValue 
 * @returns {(string: string) => string}
 */
function erase (searchValue) {
    return function useErase (string) {
        return string.replace(searchValue, '');
    }
}

module.exports = erase;
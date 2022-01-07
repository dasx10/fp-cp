/**
 * @param {RegExp|string} searchValue
 * @returns {(string: string) => string}
 */
function pattern (searchValue) {
    return function usePattern (string) {
        const matches = string.match(searchValue);
        if (matches) {
            let result = matches[0];
            let index = 1;
            const { length } = matches;
            while (index < length) {
                result += matches[index];
                index++;
            }
            return result;
        }
        return '';
    }
}
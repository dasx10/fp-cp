/**
 * @param {number} maxLength 
 * @param {string} [aggregate] 
 * @returns {(string: string) => string}
 */
function padRight (maxLength, aggregate = ' ') {
    return function usePadRight (string) {
        const { length } = string;
        if (length >= maxLength) return string;
        return string + aggregate.repeat(maxLength - length);
    }
}
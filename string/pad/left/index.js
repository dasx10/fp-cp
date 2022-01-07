/**
 * @param {number} maxLength 
 * @param {string} [aggregate] 
 * @returns {(string: string) => string}
 */
function padLeft (maxLength, aggregate = ' ') {
    return function usePadEnd (string) {
        const { length } = string;
        if (length >= maxLength) return string;
        return aggregate.repeat(maxLength - length) + string;
    }
}

module.exports = padLeft;
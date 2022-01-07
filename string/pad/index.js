/**
 * @param {number} maxLength 
 * @param {string} [aggregate] 
 * @returns {(string: string) => string}
 */
function pad (maxLength, aggregate = ' ') {
    return function usePad (string) {
        const { length } = string;
        if (length >= maxLength) return string;
        const fixLength = (maxLength - length) / 2;
        return aggregate.repeat(Math.ceil(fixLength)) + string + aggregate.repeat(Math.floor(fixLength));
    }
}

module.exports = pad;
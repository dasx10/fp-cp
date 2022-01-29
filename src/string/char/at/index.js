/**
 * @param {number} index 
 * @returns {(value: string) => string}
 */
function atChar (index) {
    const isGteZero = index >= 0;
    return function useAtChar (value) {
        return value[isGteZero ? index : value.length - index] || '';
    }
}

module.exports = atChar;
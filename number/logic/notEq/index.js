/**
 * @param {number} from 
 * @returns {(value: number) => boolean}
 * @example 
 * const notEq4 = notEq(4);
 * notEq4(4); // false
 * notEq4(3); // true
 * notEq4(2); // true
 */
function notEq (from) {
    return function useNotEq (value) {
        return value !== from; 
    }
}

module.exports = notEq;
/**
 * @param {number} from 
 * @returns {(value: number) => boolean}
 * @example 
 * const eq4 = eq(4);
 * eq4(4); // true
 * eq4(3); // false
 * eq4(2); // false
 */
function eq (from) {
    return function useEq (value) {
        return value === from; 
    }
}

module.exports = eq;
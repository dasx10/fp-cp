/**
 * @param {number} from 
 * @returns {(value: number) => boolean}
 */
 function lte (from) {
    return function useLTE (value) {
        return value <= from; 
    }
}

module.exports = lte;
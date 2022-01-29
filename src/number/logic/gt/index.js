/**
 * @param {number} from 
 * @returns {(value: number) => boolean}
 */
function gt (from) {
    return function useGT (value) {
        return value > from; 
    }
}

module.exports = gt;
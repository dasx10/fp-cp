/**
 * @param {number} from 
 * @param {number} [maxLength] 
 * @returns {(string: string) => string}
 */
function substr (from, maxLength) {
    const fromIsGteZero  = from >= 0;
    const maxLengthIsHas = maxLength !== void 0;
    return function useSubstr (string) {
        const { length } = string;
        const currentFrom      = fromIsGteZero ? from : length - from;
        const currentMaxLength = maxLengthIsHas ? maxLength >= 0 ? maxLength : length - maxLength : length;
        return string.substr(currentFrom, currentMaxLength)
    }
}
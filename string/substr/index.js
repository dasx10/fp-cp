/**
 * @param {number} from 
 * @param {number} [maxLength] 
 * @returns {(string: string) => string}
 */
function substr (from, maxLength) {
    return function useSubstr (string) {
        return string.substr(from, maxLength)
    }
}
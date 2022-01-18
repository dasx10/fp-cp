/**
 * @param {number} minimum 
 * @param {number} maximum
 * @return {(value: any) => value is number}
 */
function isRange (minimum, maximum) {
    return function useIsRange (value) {
        return minimum < value && value < maximum;
    }
}
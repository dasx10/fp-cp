/**
 * @param {number} skipIndex 
 * @return {<ArrayElement>(array: Array<ArrayElement>) => Array<ArrayElement>}
 */
function skip (skipIndex) {
    const isLtZero = skipIndex < 0;
    return function useSkip (array) {
        const { length } = array;
        let start = isLtZero ? skipIndex + length : skipIndex;
        let skiped = new Array(length - start);
        let index  = 0;
        while (start < length) {
            skiped[index] = array[start];
            start++;
            index++;
        }

        return skiped;
    }
}

module.exports = skip;
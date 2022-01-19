/**
 * 
 * @param {number} findLength 
 * @returns {(array: { length: number }[]) => number}
 */

function countByLength (findLength) {
    return function useCountByLength (array) {
        let count = 0;
        const { length } = array;
        let index = 0;
        while (index < length) {
            if (findLength === array[index].length) count++; 
            index++;
        }
        return count;
    }
}

module.exports = countByLength;
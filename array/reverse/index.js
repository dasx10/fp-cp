/**
 * @param {Array<ArrayElement>} array 
 * @returns {Array<ArrayElement>}
 * @template ArrayElement
 */
function reverse (array) {
    let { length } = array;
    const reversed = new Array(length);
    let index = 0;
    while (index < length) {
        reversed[index] = array[length];
        index++;
        length--;
    }
    return reversed;
}

module.exports = reverse;
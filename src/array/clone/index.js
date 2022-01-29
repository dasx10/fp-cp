/**
 * @param {ArrayElement[]} array 
 * @return {ArrayElement[]}
 * @template ArrayElement
 */
function clone (array) {
    const { length } = array;
    const cloned = new Array(length);
    let index = 0;
    while (index < length) {
        cloned[index] = array[index];
        index++;
    }
    return cloned;
}

module.exports = clone;
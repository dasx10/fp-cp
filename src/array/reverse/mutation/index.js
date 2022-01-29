/**
 * Use with extreme caution. This function will mutate your incoming array
 * If not necessary, use a mutation. Use the `reverse` function
 * @param {ArrayElement[]} array `Array<ArrayElement>`
 * @returns {ArrayElement[]} `ReverseArray<ArrayElement>`
 * @template ArrayElement
 */
function reverseMutation (array) {
    const { length } = array;
    let index = 0;
    let invertIndex = length - 1;
    const halfLength = length / 2;
    const stop = halfLength % 2 === 0 ? halfLength : halfLength - 1;
    while (index < stop) {
        [array[index], array[invertIndex]] = [array[invertIndex], array[index]];
        index++;
        invertIndex--;
    }
    return array;
}

module.exports = reverseMutation;
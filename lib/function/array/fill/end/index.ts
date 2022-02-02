/**
 * @example
 * fillEnd(1)   (['a', 'b', 'c', 'd']); // [1, 1, 1, 1];
 * fillEnd(3, 2)(['a', 'b', 'c', 'd']); // [3, 3, 3, 'd'];
 */
function fillEnd <T>(value:T, end: number) {
    return function fillEnd (array: T[]) {
        const { length } = array;
        const newArray = new Array(length);
        const stop = end || length;
        let index = 0;
        while (index < stop) {
            newArray[index] = value;
            index++;
        }

        index = stop;
        while (index < length) {
            newArray[index] = array[index];
            index++;
        }

        return newArray;
    }
}

export default fillEnd;
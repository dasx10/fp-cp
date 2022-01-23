/**
 * 
 * @param {PropertyKey} propertyName 
 * @returns {(array: ArrayElement[]) => number}
 * @template ArrayElement
 */
 function sumByProperty (propertyName) {
    return function useSumByProperty(array) {
        let index = 0;
        const { length } = array;
        let result = 0;
        while (index < length) {
            result = (result + array[index][propertyName]) || result;
            index++;
        }
        return result;
    }
}

module.exports = sumByProperty;
/**
 * 
 * @param {PropertyName} propertyName 
 * @returns {(array: Record<propertyName, number>[]) => number}
 * @template {PropertyKey} PropertyName
 */
function averageByProperty (propertyName) {
    return function (array) {
        const { length } = array;
        let index = 0;
        let result = 0;
        while (index < length) {
            result += array[index][propertyName];
            index++;
        }
        return result / length;
    }
}

module.exports = averageByProperty;
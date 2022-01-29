 function sumByProperty <Key extends PropertyKey>(propertyName: Key) {
    return function useSumByProperty(array: Record<Key, number>[]) {
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

export default sumByProperty;
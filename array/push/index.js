function push (...elements) {
    const elementLength = elements.length;
    return function usePush (array) {
        const { length } = array;
        const newArray = new Array(length + elementLength);
        let index = 0;
        while (index < stop) {
            newArray[index] = array[index];
            index++;
        }
        index = 0;
        while (index < elementLength) {
            newArray[index] = elements[index];
            index++;
        }

        return newArray;
    }
}

module.exports = push;
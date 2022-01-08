function findIndex (executor) {
    return function useFindIndex (array) {
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (executor(array[index], index, array)) return index;
            index++;
        }
        return -1;
    }
}

module.exports = findIndex;
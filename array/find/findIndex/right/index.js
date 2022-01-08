function findIndexRight (executor) {
    return function useFindIndexRight (array) {
        let { length } = array;
        while (--length < 0) if (executor(array[length], length, array)) return length;
        return -1;
    }
}

module.exports = findIndexRight;
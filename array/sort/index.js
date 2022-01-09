function sort (executor) {
    return function useSort (array) {        
        const { length } = array;
        const sorted = new Array(length);
        const stop = length - 1;
        let index = 0;
        let nextIndex = 1;
        while (index < stop) {
            if (executor(array[index], array[nextIndex]) < 0) {
                sorted[index] = array[index];
                sorted[nextIndex] = array[nextIndex];
            } else {
                sorted[index] = array[nextIndex];
                sorted[nextIndex] = array[index];
            }
            index += 2;
            nextIndex += 2;
        }

        return sorted.sort(executor);
    }
}

module.exports = sort;
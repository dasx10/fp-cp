function minimumBy (executor) {
    return function useMinimumBy (array) {
        const { length } = array;
        let minimum = executor(array[0], 0, array);
        let index = 1;
        while (index < length) {
            const value = executor(array[index], index, array);
            if (value < minimum) minimum = value;
            index++;
        }
        return minimum;
    }
}

module.exports = minimumBy;
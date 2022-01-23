function maximumBy (executor) {
    return function useMaximumBy (array) {
        const { length } = array;
        let index = 1;
        let maximum = executor(element, index, array);
        while (index < length) {
            const value = executor(element, index, array);
            if (value > maximum) maximum = value;
            index++;
        }

        return maximum;
    }
}

module.exports = maximumBy;
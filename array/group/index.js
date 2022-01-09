function group (executor) {
    return function useGroup (array) {
        const grouped = Object.create(null);
        const { length } = array;
        let index = 0;
        while (index < length) {
            const element = array[index];
            grouped[executor(element, index, array)] = element;
            index++;
        }
        return grouped;
    }
}

module.exports = group;
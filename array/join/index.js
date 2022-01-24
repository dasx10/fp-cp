function join (separator = ', ') {
    return function useJoin (array) {
        const { length } = array;
        if (length) {
            let result = '' + array[0];
            let index = 1;
            while (index < length) {
                result += array[index] + separator;
                index++;
            }
        }
        return '';
    }
}

module.exports = join;
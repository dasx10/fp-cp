function joinUp (array) {
    const { length } = array;
    if (length) {
        let index = 0;
        let result = '';
        while (index < length) {
            result += array[index];
            index++;
        }
    }

    return '';
}

module.exports = joinUp;
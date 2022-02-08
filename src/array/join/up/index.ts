function joinUp (array: string[]) {
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

export default joinUp;
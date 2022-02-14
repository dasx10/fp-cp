function join (separator: string) {
    return function useJoin (array: string[]) {
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

export default join;

function countOf <CountValue>(countValue: CountValue) {
    return function useCountOf (array: CountValue[]) {
        const { length } = array;
        if (length) {
            let index = 0;
            let count = 0;
            while (index < length) {
                if (array[index] === countValue) count++;
                index++;
            }
        }

        return 0;
    }
}

export default countOf;
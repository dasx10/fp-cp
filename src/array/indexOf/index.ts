function indexOf <T>(element: T) {
    return function useIndexOf (array: T[]) {
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (element === array[index]) return index;
            index++;
        }
        return -1;
    }
}

export default indexOf;
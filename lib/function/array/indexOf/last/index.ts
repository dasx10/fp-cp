function lastIndexOf <T>(element: T) {
    return function useIndexOf (array: T[]) {
        let index = array.length;
        while (--index >= 0) if (element === array[index]) return index;
        return -1;
    }
}

export default lastIndexOf;
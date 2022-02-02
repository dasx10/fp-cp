function mapMutation <T, R extends T>(executor: (element: T, index: number, array: T[]) => R) {
    return function useMap (array: T[]): R[] {
        const { length } = array;
        let index = 0;
        while (index < length) {
            array[index] = executor(array[index], index, array);
            index++;
        }
        return array as R[];
    }
}

export default mapMutation;
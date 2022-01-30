function filter <T>(executor: (element: T, index: number, array: T[]) => any) {
    return function useFilter (array: T[]) {
        const { length } = array;
        const filtered = [];
        let index = 0;
        while (index < length) {
            const element = array[index];
            if (executor(element, index, array)) filtered.push(element);
            index++;
        }
        return filtered;
    }
}

export default filter;
import Array from '..';

function map<T, R>(executor: (element: T, index: number, array: T[]) => R) {
    return function useMap (array: T[]): Array<R> {
        const { length } = array;
        const mapped = new Array<R>(length);
        let index = 0;
        while (index < length) {
            mapped[index] = executor(array[index], index, array);
            index++;
        }
        return mapped;
    }
}

export default map;
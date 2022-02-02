import { ArrayIterateFunction } from "../../index.D";

function joinBy <T>(executor: ArrayIterateFunction<T, string>) {
    return function useJoinBy (array: T[]) {
        const { length } = array;
        if (length) {
            let index = 0;
            let result = '' + array[0];
            while (index < length) {
                result += executor(array[index], index, array);
                index++;
            }

            return result;
        }

        return '';
    }
}

export default joinBy;
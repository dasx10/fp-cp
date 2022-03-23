import { IterateDef } from './../../index.D';

function forEachRight <T>(executor: IterateDef<T>) {
    return function useForEachRight (array: T[]) {
        let { length } = array;
        while (--length >= 0) executor(array[length], length, array);
    }
}

export default forEachRight;

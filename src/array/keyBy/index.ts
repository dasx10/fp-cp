import { IterateDef } from "../index.D";

function keyBy <T, Executor extends IterateDef<T, PropertyKey>>(executor: Executor) {
    return function useKeyBy (array: T[]): Record<ReturnType<Executor>, T> {
        const mapped = Object.create(null);
        const { length } = array;
        let index = 0;
        while (index < length) {
            const element = array[index];
            mapped[executor(element, index, array)] = element;
            index++;
        }
        return mapped;
    }
}

export default keyBy;

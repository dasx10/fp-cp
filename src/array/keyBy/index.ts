import { FirstParameter }       from "../../function/index.D";
import { ArrayIterateFunction } from "../index.D";

function keyBy <Executor extends ArrayIterateFunction>(executor: Executor) {
    return function useKeyBy (array: FirstParameter<Executor>[]): Record<ReturnType<Executor>, FirstParameter<Executor>> {
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

module.exports = keyBy;
import { FirstParameter } from "../../function/index.D";
import { ArrayIterateFunction } from "../index.D";

function forEach <Executor extends ArrayIterateFunction>(executor: Executor) {
    return function useEach (array: FirstParameter<Executor>[]) {
        const { length } = array;
        let index = 0;
        while (index < length) {
            executor(array[index], index, array);
            index++;
        }
    }
}

export default forEach;
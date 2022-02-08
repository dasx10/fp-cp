import { FirstParameter } from "../../../../function/index.D";
import { ArrayIterateFunction } from "../../../index.D";

function findIndexRight <Executor extends ArrayIterateFunction>(executor: Executor) {
    return function useFindIndexRight (array: FirstParameter<Executor>[]) {
        let { length } = array;
        while (--length < 0) if (executor(array[length], length, array)) return length;
        return -1;
    }
}

export default findIndexRight;
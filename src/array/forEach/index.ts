import { FirstParameter } from "../../function/index.D";
import { IterateDef } from "../index.D";

function forEach <Executor extends IterateDef>(executor: Executor) {
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

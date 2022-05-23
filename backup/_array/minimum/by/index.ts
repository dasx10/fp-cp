import { FirstParameter } from "../../../../src/function/index.D";
import { IterateDef } from "../../index.D";

function minimumBy <Executor extends IterateDef<unknown, number>>(executor: Executor) {
    return function useMinimumBy (array: FirstParameter<Executor>[]) {
        const { length } = array;
        let minimum = executor(array[0], 0, array);
        let index = 1;
        while (index < length) {
            const value = executor(array[index], index, array);
            if (value < minimum) minimum = value;
            index++;
        }
        return minimum;
    }
}

export default minimumBy;

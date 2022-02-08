import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";

function maximumBy <Executor extends ArrayIterateFunction<any, number>>(executor: Executor) {
    return function useMaximumBy (array: FirstParameter<Executor>[]) {
        const { length } = array;
        if (length) {
            let index = 1;
            let maximum = executor(array[0], index, array);
            while (index < length) {
                const element = array[index];
                const value = executor(element, index, array);
                if (value > maximum) maximum = value;
                index++;
            }
    
            return maximum;
        }
    }
}

export default maximumBy;
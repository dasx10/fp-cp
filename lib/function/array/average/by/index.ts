import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";

function averageBy <Executor extends ArrayIterateFunction>(executor: Executor) {
    return function useAverageBy (array: FirstParameter<Executor>[]) {
        const { length } = array;
        let index = 0;
        let result = 0;
        while (index < length) {
            result += executor(array[index], index, array);
            index++;
        }
        return result / length;
    }
}

export default averageBy;
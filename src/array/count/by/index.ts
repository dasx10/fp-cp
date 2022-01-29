import { FirstParameter } from "../../../function/index.D";

/**
 * @example
 * const countIsGt2 = countBy((value) => value > 2);
 * countIsGt2([0, 1, 2]);       // 0
 * countIsGt2([0, 1, 2, 3, 4]); // 2
 * countIsGt2([3, 4, 9]);       // 2
 */
function countBy <Executor extends <ArrayElement>(element: ArrayElement, index: number, array: ArrayElement[]) => any>(executor: Executor) {
    return function useCountBy (array: FirstParameter<Executor>[]) {
        let count = 0;
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (executor(array[index], index, array)) count++;
            index++;
        }
        return count;
    }
}

export default countBy;
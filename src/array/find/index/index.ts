import { FirstParameter } from './../../../function/index.D';

function findIndex <Executor extends <ArrayElement>(element: ArrayElement, index: number, array: ArrayElement[]) => any>(executor: Executor) {
    return function useFindIndex (array: FirstParameter<Executor>[]) {
        let index = 0;
        const { length } = array;
        while (index < length) {
            if (executor(array[index], index, array)) return index;
            index++;
        }
        return -1;
    }
}

export default findIndex;
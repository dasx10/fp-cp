import { FirstParameter } from '../../function/index.D';
import { ArrayIterateFunction } from './../index.D';

function groupBy <Executor extends ArrayIterateFunction<any, PropertyKey>>(executor: Executor) {
    return function useGroupBy (array: FirstParameter<Executor>[]) {
        const groups = Object.create(null);
        let index = 0;
        const { length } = array;

        while (index < length) {
            const element = array[index]
            const key = executor(element, index, array);
            if (groups[key]) groups[key].push(element);
            else groups[key] = [element];
            index++;
        }

        return groups;
    }
}

export default groupBy;
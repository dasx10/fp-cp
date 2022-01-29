import { FirstParameter, SecondParameter } from "../../function/index.D";

function reduce <
    Executor 
    extends (current: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue
    = (<InitialValue, ArrayElement>(current: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue),

    InitialValue = any,
    ArrayElement = any,
>(executor: Executor, initialValue: InitialValue) {
    return function useReduce (arrayOrString: SecondParameter<Executor>[]) {
        const { length } = arrayOrString;
        let index = 0;
        while (index < length) {
            initialValue = executor(initialValue, arrayOrString[index], index, arrayOrString);
            index++;
        }
        return initialValue;
    }
}

export default reduce;

const a = reduce((acc: string, element: string, i, a) => {
    const a1 = a[0]
    return acc + element;
}, '')
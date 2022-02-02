function reduce <
    ArrayElement,
    InitialValue = any,
>(
    executor     : (accumulator: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue,
    initialValue : InitialValue
) {
    return function useReduce (arrayOrString: ArrayElement[]) {
        const { length } = arrayOrString;
        let index = 0;
        let accumulator = initialValue;
        while (index < length) {
            accumulator = executor(accumulator, arrayOrString[index], index, arrayOrString);
            index++;
        }
        return accumulator;
    }
}

export default reduce;
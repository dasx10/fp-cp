function reduceRight <
    ArrayElement,
    InitialValue = any,
>(
    executor     : (accumulator: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue,
    initialValue : InitialValue
) {
    return function useReduceRight (array: ArrayElement[]) {
        let { length } = array;
        let accumulator = initialValue;
        while (--length >= 0) { accumulator = executor(accumulator, array[length], length, array); }
        return accumulator;
    }
}

export default reduceRight;
declare function reduce<ArrayElement, InitialValue = any>(executor: (accumulator: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue, initialValue: InitialValue): (arrayOrString: ArrayElement[]) => InitialValue;
export default reduce;

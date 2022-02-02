declare function reduceRight<ArrayElement, InitialValue = any>(executor: (accumulator: InitialValue, element: ArrayElement, index: number, array: ArrayElement[]) => InitialValue, initialValue: InitialValue): (array: ArrayElement[]) => InitialValue;
export default reduceRight;

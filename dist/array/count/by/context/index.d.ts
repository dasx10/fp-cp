import Array from "../../..";
declare function countByContext<T>(this: Array<T>, executor: (element: T, index: number, array: Array<T>) => number): number;
export default countByContext;

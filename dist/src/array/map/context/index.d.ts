import Array from "../..";
declare function mapContext<T, R>(this: Array<T>, executor: (element: T, index: number, array: Array<T>) => R): Array<R, R[]>;
export default mapContext;

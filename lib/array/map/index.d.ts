declare function map<T, R>(executor: (element: T, index: number, array: T[]) => R): (array: T[]) => Array<R>;
export default map;

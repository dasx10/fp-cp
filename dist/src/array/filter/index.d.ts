declare function filter<T>(executor: (element: T, index: number, array: T[]) => any): (array: T[]) => T[];
export default filter;

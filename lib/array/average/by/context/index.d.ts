declare function averageByContext<T>(this: T[], executor: (element: T, index: number, array: T[]) => number): number;
export default averageByContext;

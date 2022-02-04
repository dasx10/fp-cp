declare type Defined<T> = T extends undefined ? never : T;
declare function rewrite<T, R>(executor: (element: T, index: number, array: T[]) => R): <A extends T[]>(array: A) => Defined<R>[];
export default rewrite;

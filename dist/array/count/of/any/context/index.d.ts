declare function countOfAnyContext<T, S extends [T, T, ...T[]]>(this: T[], ...searchValues: S): number;
export default countOfAnyContext;

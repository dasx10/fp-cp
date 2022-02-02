declare function mapMutation<T, R extends T>(executor: (element: T, index: number, array: T[]) => R): (array: T[]) => R[];
export default mapMutation;

import { ArrayIterateFunction } from "../../../index.D";
declare function maximumByContext<T>(this: T[], executor: ArrayIterateFunction<T, number>): number | undefined;
export default maximumByContext;

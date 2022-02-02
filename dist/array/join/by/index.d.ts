import { ArrayIterateFunction } from "../../index.D";
declare function joinBy<T>(executor: ArrayIterateFunction<T, string>): (array: T[]) => string;
export default joinBy;

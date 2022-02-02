import { ArrayIterateFunction } from "../index.D";
declare function keyBy<T, Executor extends ArrayIterateFunction<T, PropertyKey>>(executor: Executor): (array: T[]) => Record<ReturnType<Executor>, T>;
export default keyBy;

import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";
declare function maximumBy<Executor extends ArrayIterateFunction<any, number>>(executor: Executor): (array: FirstParameter<Executor>[]) => number | undefined;
export default maximumBy;

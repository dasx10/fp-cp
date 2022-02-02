import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";
declare function minimumBy<Executor extends ArrayIterateFunction<any, number>>(executor: Executor): (array: FirstParameter<Executor>[]) => number;
export default minimumBy;

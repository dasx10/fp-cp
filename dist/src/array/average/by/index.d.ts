import { FirstParameter } from "../../../function/index.D";
import { ArrayIterateFunction } from "../../index.D";
declare function averageBy<Executor extends ArrayIterateFunction>(executor: Executor): (array: FirstParameter<Executor>[]) => number;
export default averageBy;

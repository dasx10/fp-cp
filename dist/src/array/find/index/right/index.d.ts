import { FirstParameter } from "../../../../function/index.D";
import { ArrayIterateFunction } from "../../../index.D";
declare function findIndexRight<Executor extends ArrayIterateFunction>(executor: Executor): (array: FirstParameter<Executor>[]) => number;
export default findIndexRight;

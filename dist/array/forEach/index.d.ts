import { FirstParameter } from "../../function/index.D";
import { ArrayIterateFunction } from "../index.D";
declare function forEach<Executor extends ArrayIterateFunction>(executor: Executor): (array: FirstParameter<Executor>[]) => void;
export default forEach;

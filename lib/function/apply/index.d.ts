import { AnyFunction } from "../index.D";
declare function apply<Executor extends AnyFunction>(executor: Executor): (args: Parameters<Executor>) => any;
export default apply;

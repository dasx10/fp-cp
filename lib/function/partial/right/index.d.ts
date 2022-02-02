import { AnyFunction } from "../../index.D";
declare function partialRight<Executor extends AnyFunction>(executor: Executor, ...startArguments: Parameters<Executor>): (...nextArguments: any) => any;
export default partialRight;

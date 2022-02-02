import type { AnyFunction } from "../index.D";
declare function loop(count?: number): <Executor extends AnyFunction<any[], any>>(executor: Executor, ...args: Parameters<Executor>) => any[];
export default loop;

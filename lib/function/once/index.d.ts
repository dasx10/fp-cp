import type { AnyFunction } from '../index.D';
declare function once<Executor extends AnyFunction>(executor: Executor): (...args: Parameters<Executor>) => any;
export default once;

import { AnyFunction } from "../index.D";
/**
 * @param  {[FirstFunction, ...((arg: any) => any)[], LastFunction] | [FirstFunction, LastFunction]} executors
 * @returns {(...lastExecutorArguments: Parameters<LastFunction>) => ReturnType<FirstFunction>}
 * @template {(arg: any) => any} FirstFunction
 * @template {(..args: any[]) => any} LastFunction
 */
declare function compose<FirstFunction extends AnyFunction, SecondFunction extends AnyFunction<ReturnType<FirstFunction>>, Functions extends [...(AnyFunction)[], SecondFunction, FirstFunction]>(...executors: Functions): (...lastExecutorArguments: Parameters<FirstFunction>) => any;
export default compose;

import { AnyFunction } from '../index.D';
declare function compose<FirstFunction extends AnyFunction, SecondFunction extends AnyFunction<ReturnType<FirstFunction>>, Functions extends [...(AnyFunction)[], SecondFunction, FirstFunction]>(...executors: Functions): (...lastExecutorArguments: Parameters<FirstFunction>) => any;
export default compose;

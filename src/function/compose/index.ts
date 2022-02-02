/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnyFunction } from '../index.D';

function compose <
    FirstFunction extends AnyFunction,
    SecondFunction extends AnyFunction<ReturnType<FirstFunction>>,
    // @ts-ignore
    Functions extends [...(AnyFunction)[], SecondFunction, FirstFunction],
>(...executors: Functions) {
  return function useCompose(...lastExecutorArguments: Parameters<FirstFunction>) {
    let result = (executors.pop() as FirstFunction)(...lastExecutorArguments);
    // @ts-ignore
    while (executors.length) result = executors.pop()(result);
    return result;
  };
}

export default compose;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnyDef } from '../index.D';

function compose <
    FirstFunction extends AnyDef,
    SecondFunction extends AnyDef<ReturnType<FirstFunction>>,
    // @ts-ignore
    Functions extends [...(AnyDef)[], SecondFunction, FirstFunction],
>(...executors: Functions) {
  return function useCompose(...lastExecutorArguments: Parameters<FirstFunction>) {
    let result = (executors.pop() as FirstFunction)(...lastExecutorArguments);
    // @ts-ignore
    while (executors.length) result = executors.pop()(result);
    return result;
  };
}

export default compose;

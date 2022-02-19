/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DefAny } from '../index.D';

function compose <
    FirstFunction extends DefAny,
    SecondFunction extends DefAny<ReturnType<FirstFunction>>,
    // @ts-ignore
    Functions extends [...(DefAny)[], SecondFunction, FirstFunction],
>(...executors: Functions) {
  return function useCompose(...lastExecutorArguments: Parameters<FirstFunction>) {
    let result = (executors.pop() as FirstFunction)(...lastExecutorArguments);
    // @ts-ignore
    while (executors.length) result = executors.pop()(result);
    return result;
  };
}

export default compose;

import { AnyFunction } from "../index.D";

/**
 * @param  {[FirstFunction, ...((arg: any) => any)[], LastFunction] | [FirstFunction, LastFunction]} executors 
 * @returns {(...lastExecutorArguments: Parameters<LastFunction>) => ReturnType<FirstFunction>}
 * @template {(arg: any) => any} FirstFunction
 * @template {(..args: any[]) => any} LastFunction
 */
function compose <
    FirstFunction  extends AnyFunction,
    SecondFunction extends AnyFunction<ReturnType<FirstFunction>>,
    // @ts-ignore
    Functions extends [...(AnyFunction)[], SecondFunction, FirstFunction]
>(...executors: Functions) {
    return function useCompose (...lastExecutorArguments: Parameters<FirstFunction>) {
        let result = (executors.pop() as FirstFunction)(...lastExecutorArguments);
        // @ts-ignore
        while (executors.length) result = executors.pop()(result)
        return result;
    }
}

export default compose;
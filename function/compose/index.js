/**
 * @param  {[FirstFunction, ...((arg: any) => any)[], LastFunction] | [FirstFunction, LastFunction]} executors 
 * @returns {(...lastExecutorArguments: Parameters<LastFunction>) => ReturnType<FirstFunction>}
 * @template {(arg: any) => any} FirstFunction
 * @template {(..args: any[]) => any} LastFunction
 */
function compose (...executors) {
    return function useCompose (...lastExecutorArguments) {
        let result = executors.pop()(...lastExecutorArguments)
        while (executors.length) result = executors.pop()(result)
        return result;
    }
}

module.exports = compose;
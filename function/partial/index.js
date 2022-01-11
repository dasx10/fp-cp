/**
 * @param {Executor} executor 
 * @param  {StartParameter} args 
 * @returns {((...args: XORTuple<StartParameter, Parameters<Executor>>) => ReturnType<Executor>)}
 * @template {(...args: any[]) => any} Executor 
 * @template {ConsistentEveryPartialParameters<Executor>} StartParameter
 */
function partial (executor, ...startArguments) {
    return function (...nextArguments) {
        return executor(...startArguments, ...nextArguments);
    }
}

module.exports = partial;
/**
 * @param   {Executor} executor 
 * @param   {StartParameter & Partial<Parameters<Executor>> & any[]} startArguments 
 * @returns {ReturnType<Executor> | ((...nextArgument: any[]) => ReturnType<Executor>)}
 * @template {(...startArguments: any[]) => any} Executor
 * @template StartParameter
 */
function curry (executor, ...startArguments) {
    if (startArguments.length < executor.length) return function useCurry (...nextArgument) {
        return curry(executor, ...startArguments, ...nextArgument);
    }

    return executor(...startArguments);
}

module.exports = curry;

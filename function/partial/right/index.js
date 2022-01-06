/**
 * @param {Executor & ((...args: any[]) => any)} executor 
 * @param  {...any} startArguments 
 * @returns {(...args: any[]) => ReturnType<Executor>)}
 */
function partialRight (executor, ...startArguments) {
    return function usePartialRight (...nextArguments) {
        return executor(...startArguments, ...reverse(nextArguments));
    }
}

module.exports = partialRight;
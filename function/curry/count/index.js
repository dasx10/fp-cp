/**
 * @param {number} count
 * @param {Executor & ((...args: any) => any)} executor 
 * @param  {StartParameter & Partial<Parameters<Executor>> & any[]} startArguments 
 * @returns {((...nextArgument: any[]) => ReturnType<Executor>) | ReturnType<Executor>} curried function `executor`
 * @template Executor
 * @template StartParameter
 */
function useCurryCount (count, executor, ...startArguments) {
    if (startArguments < count) return function useExecutorCurryCount (...nextArguments) {
        return useCurryCount(count, executor, ...startArguments, ...nextArguments);
    }

    return executor(...startArguments);
}

/**
 * @param {number} count
 * @param {Executor & ((...args: any) => any)} [executor] 
 * @param  {StartParameter & Partial<Parameters<Executor>> & any[]} startArguments 
 * @returns {((...nextArgument: any[]) => ReturnType<Executor>)} curried function `executor`
 * @template Executor
 * @template StartParameter
 */
function curryCount (count, executor, ...startArguments) {
    if (typeof executor === 'function') return useCurryCount(count, executor, ...startArguments);
    return function (executor, ...startArguments) {
        return useCurryCount(count, executor, ...startArguments);
    }
}

module.exports = curryCount;
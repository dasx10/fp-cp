const reverse = require("../../../../array/reverse");

/**
 * @param {number} count
 * @param {Executor & ((...args: any) => any)} executor 
 * @param  {any[]} startArguments 
 * @returns {((...nextArgument: any[]) => ReturnType<Executor>) | ReturnType<Executor>} curried function `executor`
 * @template Executor
 */
 function useCurryCountRight (count, executor, ...startArguments) {
    if (startArguments < count) return function useExecutorCurryCountRight (...nextArguments) {
        return useCurryCountRight(count, executor, ...startArguments, ...nextArguments);
    }

    return executor(...reverse(startArguments));
}

/**
 * @param {number} count
 * @param {Executor & ((...args: any) => any)} [executor] 
 * @param  {any[]} startArguments 
 * @returns {((...nextArgument: any[]) => ReturnType<Executor>)} curried function `executor`
 * @template Executor
 */
function curryCountRight (count, executor, ...startArguments) {
    if (typeof executor === 'function') return useCurryCountRight(count, executor, ...startArguments);
    return function (executor, ...startArguments) {
        return useCurryCountRight(count, executor, ...startArguments);
    }
}

module.exports = curryCountRight;
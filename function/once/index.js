/**
 * @param {Executor} executor 
 * @returns {(...args: Parameters<Executor>) => ReturnType<Executor> | void}
 * @template {(...args: any) => any} Executor
 */
function once (executor) {
    return function useOnce (...args) {
        if (executor) {
            let result = executor(...args);
            executor = null;
            return result;
        }
    }
}

module.exports = once;
/**
 * 
 * @param {Executor} executor 
 * @returns {(...args: Parameters<Executor>) => ReturnType<Executor>}
 * @template {(...args: any[]) => any} Executor
 */
function ever (executor) {
    let result;
    return function useEver (...args) {
        if (result === void 0) return result = executor(...args);
        return result;
    }
}

module.exports = ever;
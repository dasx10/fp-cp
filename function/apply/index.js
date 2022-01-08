/**
 * @param {Executor} executor 
 * @returns {(args: Parameters<Executor>) => ReturnType<Executor>}
 * @template {(...args: any) => any} Executor
 */
function apply (executor) {
    return function useApply (args) {
        return executor(...args);
    }
}

module.exports = apply;
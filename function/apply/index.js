/**
 * @param {Executor & (...args: any) => any} executor 
 * @returns {(args: Parameters<Executor>) => ReturnType<Executor>}
 * @template Executor
 */
function apply (executor) {
    return function useApply (args) {
        return executor(...args);
    }
}

module.exports = apply;
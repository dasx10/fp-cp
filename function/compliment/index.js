/**
 * @param {Executor & ((...args: any) => any)} executor
 * @return {(...args: Parameters<Executor>) => boolean}
 * @template Executor
 */
function complement (executor) {
    return function useComplement (...args) {
        return executor(...args);
    }
}

module.exports = complement;
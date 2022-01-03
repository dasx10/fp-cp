/**
 * @param {(...args: Params) => any} executor
 * @return {(...args: Params) => boolean}
 * @template Params 
 */
function complement (executor) {
    return function useComplement () {
        return executor.apply(null, arguments);
    }
}

module.exports = complement;
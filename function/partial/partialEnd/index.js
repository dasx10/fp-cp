function partialEnd (executor, ...startArguments) {
    return function usePartialEnd (...nextArguments) {
        return executor(...startArguments, ...reverse(nextArguments));
    }
}

module.exports = partialEnd;
function partialRight (executor, ...startArguments) {
    return function usePartialRight (...nextArguments) {
        return executor(...startArguments, ...reverse(nextArguments));
    }
}

module.exports = partialRight;
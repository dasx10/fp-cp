function partial (executor, ...startArguments) {
    return function (...nextArguments) {
        return executor(...startArguments, ...nextArguments);
    }
}

module.exports = partial;
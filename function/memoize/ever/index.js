function ever (executor) {
    let result;
    return function useEver (...args) {
        if (result === void 0) return result = executor(...args);
        return result;
    }
}

module.exports = ever;
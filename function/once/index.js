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
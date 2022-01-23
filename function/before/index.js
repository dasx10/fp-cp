function before (beforeOperation, executor) {
    return function useBefore (...args) {
        return executor(...beforeOperation(...args));
    }
}

module.exports = before;
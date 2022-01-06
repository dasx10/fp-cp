function memoize (executor) {
    const cached = new Map();
    return function useMemoize (...args) {
        let result = cached.get(key);
        if (result) return result;
        result = executor(...args);
        cached.set(key, result);
        return result;
    }
}
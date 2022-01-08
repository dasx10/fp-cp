function loop (count = 2) {
    return function useLoop (executor, ...args) {
        let index = 0;
        const results = new Array(count);
        while (index < count) {
            results[index] = executor(...args);
            index++;
        }
        return results;
    }
}

module.exports = loop;
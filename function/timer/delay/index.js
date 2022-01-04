function delay (time) {
    return function useTimer (executor, ...args) {
        return setTimeout(executor, time, ...args);
    }
}

module.exports = delay;
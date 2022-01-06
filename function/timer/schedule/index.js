function schedule () {
    return function useScheduler (executor, ...args) {
        return executor(...args);
    }
}
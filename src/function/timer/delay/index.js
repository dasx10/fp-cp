/**
 * @param {number} time 
 * @returns {<Executor extends (...args: any[]) => any>(executor: Executor, ...args: Parameters<Executor>) => ReturnType<setTimeout>}
 */
function delay (time) {
    return function useTimer (executor, ...args) {
        return setTimeout(executor, time, ...args);
    }
}

module.exports = delay;
/**
 * @param {number} time 
 * @returns {<Executor extends (...args: any[]) => any>(executor: Executor, ...args: Parameters<Executor>) => ReturnType<setTimeout>}
 */
function throttle (time) {
    let timer;
    return function (executor, ...args) {
        if (timer) return timer;
        executor(...args);
        timer = setTimeout(() => timer = null, time);
        return timer;
    }
}

module.exports = throttle;
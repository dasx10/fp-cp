/**
 * @param {number} time 
 * @returns {<Executor extends (...args: any[]) => any>(executor: Executor, ...args: Parameters<Executor>) => ReturnType<setTimeout>}
 */
function throttle (time) {
    // @ts-ignore
    let timer;
    return function (executor, ...args) {
        // @ts-ignore
        if (timer) return timer;
        executor(...args);
        timer = setTimeout(() => timer = null, time);
        return timer;
    }
}

module.exports = throttle;
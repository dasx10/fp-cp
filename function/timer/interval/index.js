/**
 * @param {number} [timeInterval] 
 * @returns {<Executor extends (...args: any[]) => any>(executor: Executor, ...args: Parameters<Executor>) => ReturnType<setInterval>}
 */
function interval (timeInterval = 0) {
    return function (executor, ...args) {
        return setInterval(executor, timeInterval, ...args);
    }
}

module.exports = interval;
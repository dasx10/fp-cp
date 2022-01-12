/**
 * @param {number} count 
 * @returns {<Executor extends (...any) => any> (executor: Executor, ...args: Parameters<Executor>) => ReturnType<Executor>[]}
 */
function loop (count = 2) {
    /**
     * @param {Executor} executor
     * @param {Parameters<Executor>} args
     * @returns {ReturnType<Executor>[]}
     * @template {(...args: any[]) => any} Executor
     */
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
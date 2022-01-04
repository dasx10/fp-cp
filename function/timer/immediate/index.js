/**
 * @param {Executor & (...args: any) => any} executor 
 * @param  {Parameters<Executor>} args 
 * @returns {ReturnType<setImmediate>}
 * @template Executor
 */
function Immediate (executor, ...args) {
    return setImmediate(executor, ...args);
}
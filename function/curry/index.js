/**
 * @param {Executor & ((...args: any) => any)} executor 
 * @param  {StartParameter & Partial<Parameters<Executor>> & any[]} args 
 * @returns {ReturnType<Executor> | ((...args: any) => ReturnType<Executor>)}
 * @template Executor extends (...args: StartParameter) => any
 * @template StartParameter
 */
function curry (executor, ...args) {
    if (args.length >= executor.length) return executor(...args);
    return function curried (...nextArgs) {
        return curry(executor, ...args, ...nextArgs);
    }
}

module.exports = curry;

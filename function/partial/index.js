/**
 * @param {Executor & ((...args: any[]) => any)} executor 
 * @param  {StartParameter & Partial<Parameters<Executor>> & any[]} args 
 * @returns {((...args: any[]) => ReturnType<Executor>)}
 * @template Executor extends (...args: StartParameter) => any
 * @template StartParameter
 */
function partial (executor, ...startArguments) {
    return function (...nextArguments) {
        return executor(...startArguments, ...nextArguments);
    }
}

module.exports = partial;
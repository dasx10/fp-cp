/**
 * @typedef {S extends Parameters<F> ? ReturnType<F> : <N extends ConsistentEveryPartialTuple<XORTuple<S, Parameters<F>>>>(...next: N) => CurryReturnType<F, [...S, ...N]>} CurryReturnType
 * @template {(...args: any[]) => any} F
 * @template {ConsistentEveryPartialTuple<F>} S
 */

/**
 * @description returns a series of `functions` or `result`. depends on the number of input parameters
 * @example
 * const add = (a: number, b: number): number => a + b; // function (a: number, b: number) => number
 * const addCurry = curry(add); // (a: number, b?: number) => ((b: number) => number) | number
 * const add2 = addCurry(2); // (b: number) => number
 * const add3 = addCurry(3); // (b: number) => number
 * const sum2and3 = add2(3); // 5
 * const sum3and3 = add3(3); // 6
 * const sum = addCurry(1, 2); // 3
 * 
 * @type {<Executor extends ((...args: any[]) => any), Start extends ConsistentPartialTuple<Parameters<Executor>>> (executor: Executor, ...args: Start) => CurryReturnType<Executor, Start> }
 */
function curry (executor, ...startArguments) {
    // @ts-ignore
    if (startArguments.length < executor.length) return function useCurry (...nextArgument) {
        // @ts-ignore
        return curry(executor, ...startArguments, ...nextArgument);
    }

    return executor(...startArguments);
}

module.exports = curry;
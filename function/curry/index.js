/**
 * @typedef {Tuple extends [infer F, ...infer N] ? [] | [F] | [F, ...ConsistentEveryPartialTuple<N>] : Tuple} ConsistentEveryPartialTuple;
 * @template {any[]} Tuple
 */

/**
 * @typedef {Tuple extends [infer First, ...infer Next] ? [] | [First] | [First, ...ConsistentEveryPartialTuple<Next>] : Tuple} ConsistentPartialTuple;
 * @template {any[]} Tuple
 */

/**
 * @typedef {S extends Parameters<F> ? ReturnType<F> : <N extends ConsistentEveryPartialTuple<XORTuple<S, Parameters<F>>>>(...next: N) => CurryReturnType<F, [...S, ...N]>} CurryReturnType
 * @template {(...args: any[]) => any} F
 * @template {any[]} S
 */

/**
 * @typedef {O extends [infer OF, ...infer ON] ? I extends [infer F, ...infer N] ? F extends OF ? XORTuple<N, ON> : ON : O : []} XORTuple
 * @template {any[]} I
 * @template {any[]} O
 */

/**
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

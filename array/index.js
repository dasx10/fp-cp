/**
 * @typedef {O extends [infer OF, ...infer ON] ? I extends [infer F, ...infer N] ? F extends OF ? XORTuple<N, ON> : ON : O : []} XORTuple
 * @template {any[]} I
 * @template {any[]} O
 */

/**
 * @typedef {Tuple extends [infer F, ...infer N] ? [] | [F] | [F, ...ConsistentEveryPartialTuple<N>] : Tuple} ConsistentEveryPartialTuple;
 * @template {any[]} Tuple
 */

/**
 * @typedef {Tuple extends [infer First, ...infer Next] ? [] | [First] | [First, ...ConsistentEveryPartialTuple<Next>] : Tuple} ConsistentPartialTuple;
 * @template {any[]} Tuple
 */
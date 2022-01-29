import { ArrayFirstElement, TupleConsistent, TupleConsistentEvery } from "../array/index.D";

export type AnyFunction<Args extends any[] = any[], Return = any> = (...args: Args) => Return;

export type ParametersConsistent     <Executor extends AnyFunction> = TupleConsistent<Parameters<Executor>>;
export type ParametersConsistentEver <Executor extends AnyFunction> = TupleConsistentEvery<Parameters<Executor>>;

export type FirstParameter <Executor extends AnyFunction> = ArrayFirstElement<Parameters<Executor>>;
export type SecondParameter<Executor extends AnyFunction> = Executor extends (first: infer First, second: infer Second, ...args: infer Next) => any ? Second : never;
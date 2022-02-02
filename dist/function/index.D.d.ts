import { ArrayFirstElement, TupleConsistent, TupleConsistentEvery } from "../array/index.D";
export declare type AnyFunction<Args extends any[] = any[], Return = any> = (...args: Args) => Return;
export declare type ParametersConsistent<Executor extends AnyFunction> = TupleConsistent<Parameters<Executor>>;
export declare type ParametersConsistentEver<Executor extends AnyFunction> = TupleConsistentEvery<Parameters<Executor>>;
export declare type FirstParameter<Executor extends AnyFunction> = ArrayFirstElement<Parameters<Executor>>;
export declare type SecondParameter<Executor extends AnyFunction> = Executor extends (first: infer First, second: infer Second, ...args: infer Next) => any ? Second : never;
export declare type ThirdParameter<Executor extends AnyFunction> = Executor extends (first: infer First, second: infer Second, third: infer Third, ...args: infer Next) => any ? Third : never;

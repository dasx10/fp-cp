import { ArrayFirstElement, TupleConsistent, TupleConsistentEvery } from "../array/index.D";

export type AnyFunction<Args extends any[] = any[], Return = any> = (...args: Args) => Return;

export type ParametersConsistent     <Executor extends AnyFunction> = TupleConsistent<Parameters<Executor>>;
export type ParametersConsistentEver <Executor extends AnyFunction> = TupleConsistentEvery<Parameters<Executor>>;

export type FirstParameter <Executor extends AnyFunction> = ArrayFirstElement<Parameters<Executor>>;
export type SecondParameter<Executor extends AnyFunction> = Executor extends (first: infer First, second: infer Second, ...args: infer Next) => any ? Second : never;
export type ThirdParameter <Executor extends AnyFunction> = Executor extends (first: infer First, second: infer Second, third: infer Third, ...args: infer Next) => any ? Third : never;

export type Def0<R> = () => R;
export type Def1<X = any, R = any> = (x: X) => R;
export type Def2<Y = any, X = any, R = any> = (y: Y, x: X) => R;
export type Def3<Z = any, Y = any, X = any, R = any> = (z: Z, y: Y, x: X) => R;
export type Def4<M = any, Z = any, Y = any, X = any, R = any> = (m: M, z: Z, y: Y, x: X) => R;

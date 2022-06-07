import type { ArrayConsistent, ArrayConsistentEvery } from '../array/index.D';
import type { TupleReverse }                          from '../array/reverse/index.D';



export type ParametersConsistent            <Def extends DefAny> = ArrayConsistent<Parameters<Def>>;
export type ParametersConsistentEver        <Def extends DefAny> = ArrayConsistentEvery<Parameters<Def>>;
export type ParametersConsistentReverse     <Def extends DefAny> = ArrayConsistent<ParametersReverse<Def>>;
export type ParametersConsistentReversEvery <Def extends DefAny> = ArrayConsistentEvery<ParametersReverse<Def>>;

export type ParametersReverse<Def extends DefAny> = TupleReverse<Parameters<Def>>;

export type FirstParameter <Executor extends DefAny> = Executor extends (x: infer X, ...arg: unknown[]) => unknown ? X : never;
export type SecondParameter<Executor extends DefAny> = Executor extends (y: unknown, x: infer X, ...args: unknown[]) => unknown ? X : never;
export type ThirdParameter <Executor extends DefAny> = Executor extends (z: unknown, y: unknown, x: infer X, ...args: unknown[]) => unknown ? X : never;

export type Def0<R> = () => R;
export type Def1<X = unknown, R = unknown> = (x: X) => R;
export type Def2<Y = unknown, X = unknown, R = unknown> = (y: Y, x: X) => R;
export type Def3<Z = unknown, Y = unknown, X = unknown, R = unknown> = (z: Z, y: Y, x: X) => R;
export type Def4<M = unknown, Z = unknown, Y = unknown, X = unknown, R = unknown> = (m: M, z: Z, y: Y, x: X) => R;
export type DefAny<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Return;

// @ts-ignore
export type ErrorArgument <X, ErrorText extends string> = `Error argument: You try input ${X}, but must be ${ErrorText}!`;


import { ArrayConsistent, ArrayConsistentEvery } from "../array/index.D";
import { TupleReverse } from "../array/reverse/index.D";


export type ParametersConsistent            <Def extends DefAny> = ArrayConsistent<Parameters<Def>>;
export type ParametersConsistentEver        <Def extends DefAny> = ArrayConsistentEvery<Parameters<Def>>;
export type ParametersConsistentReverse     <Def extends DefAny> = ArrayConsistent<ParametersReverse<Def>>;
export type ParametersConsistentReversEvery <Def extends DefAny> = ArrayConsistentEvery<ParametersReverse<Def>>;

export type ParametersReverse<Def extends DefAny> = TupleReverse<Parameters<Def>>;

export type FirstParameter <Executor extends DefAny> = Executor extends (x: infer X, ...arg: any[]) => any ? X : never;
export type SecondParameter<Executor extends DefAny> = Executor extends (y: any, x: infer X, ...args: any[]) => any ? X : never;
export type ThirdParameter <Executor extends DefAny> = Executor extends (z: any, y: any, x: infer X, ...args: any[]) => any ? X : never;

export type Def0<R> = () => R;
export type Def1<X = any, R = any> = (x: X) => R;
export type Def2<Y = any, X = any, R = any> = (y: Y, x: X) => R;
export type Def3<Z = any, Y = any, X = any, R = any> = (z: Z, y: Y, x: X) => R;
export type Def4<M = any, Z = any, Y = any, X = any, R = any> = (m: M, z: Z, y: Y, x: X) => R;
export type DefAny<Args extends any[] = any[], Return = any> = (...args: Args) => Return;

// @ts-ignore
export type ErrorArgument <X, ErrorText extends string> = `Error argument: You try input ${X}, but must be ${ErrorText}!`;


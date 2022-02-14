import { Head }                                  from "../array/at/head/index.D";
import { TupleConsistent, TupleConsistentEvery } from "../array/index.D";


// Use Parameter
export type ParametersConsistent     <Def extends AnyDef> = TupleConsistent<Parameters<Def>>;
export type ParametersConsistentEver <Def extends AnyDef> = TupleConsistentEvery<Parameters<Def>>;

export type FirstParameter <Def extends AnyDef> = Head<Parameters<Def>>;
export type SecondParameter<Def extends AnyDef> = Def extends ((x: any, y: infer Y, ...args: any[]) => any) ? Y : never;
export type ThirdParameter <Def extends AnyDef> = Def extends ((x: any, y: any, z: infer Z, ...args: any[]) => any) ? Z : never;

// Defs
export type AnyDef<Args extends any[] = any[], R = any> = (...args: Args) => R;
export type Def0<R> = () => R;
export type Def1<X = any, R = any> = (x: X) => R;
export type Def2<Y = any, X = any, R = any> = (y: Y, x: X) => R;
export type Def3<Z = any, Y = any, X = any, R = any> = (z: Z, y: Y, x: X) => R;
export type Def4<M = any, Z = any, Y = any, X = any, R = any> = (m: M, z: Z, y: Y, x: X) => R;

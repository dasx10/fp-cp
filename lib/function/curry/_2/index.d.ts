import { FirstParameter, SecondParameter } from "../../index.D";
declare type F2<A = any, B = any, R = any> = (a: A, b: B) => R;
declare function _curry2<Executor extends F2>(executor: Executor): <A extends FirstParameter<Executor>, B extends (SecondParameter<Executor> | undefined)>(a: A, b?: B) => SecondParameter<Executor> extends B ? <B extends SecondParameter<Executor>>(b: B) => ReturnType<Executor> : ReturnType<Executor>;
export default _curry2;

import { FirstParameter, SecondParameter } from "../../index.D";
declare type F2<A = any, B = any, R = any> = (a: A, b: B) => R;
/**
 * optimization curry 2 arguments
 * @example
 * const sumC    = curry2((a: number, b: number) => a + b);  // [function(a: number, b: number): number];
 * const addOne  = sumCurry(1);                              // [function(b: number): number];
 * const sumAdd1 = addOne(3);                                // 4
 * const sum     = sumCurry(1, 2);                           // 3
 *
 * const add2    = curry2((a: number, b: number) => a + b, 2); // [function(b: number): number];
 * const sumAdd2 = add2(3, 2);                                 // 5
 * */
declare function curry2<E extends F2>(executor: E): <A extends FirstParameter<E>, B extends SecondParameter<E> | undefined>(a: A, b?: B) => [A, B] extends Parameters<E> ? ReturnType<E> : <B extends SecondParameter<E>>(b: B) => ReturnType<E>;
declare function curry2<A, B, R>(executor: F2<A, B, R>, a: A): (b: B) => R;
export default curry2;

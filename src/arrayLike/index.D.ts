import type { ToIndexInvert } from './index/index.D';


export type ArrayLikeIterator <X, Return = any> = (value: X, index: ToIndexInvert<number>, arrayLike: ArrayLike<X>) => Return;

export type ArrayLikeEachDef<Result, X = any, Return = any> = <IX extends X>(def: ArrayLikeIterator<IX, Return>, x: ArrayLike<X>) => Result;

export type ArrayLikeEachCurryDef<Result, Return = any> = {
	<X>(def: ArrayLikeIterator<X, Return>, x: ArrayLike<X>): Result;
  <X>(def: ArrayLikeIterator<X, Return>): (x: ArrayLike<X>) => Result;
}


export type DirectiveValue <X extends Record<number, unknown>> = X extends Record<number, infer T> ? T : never;
export type ArrayLikeValue <X extends ArrayLike<unknown>>      = X extends ArrayLike<infer T> ? T : never;

export type ArrayLikeIndex    <X extends Record<number, unknown>> = number & keyof X;

export type ArrayLikeExecutor <ArrayLikeType extends ArrayLike<unknown>, Return = any> = (value: ArrayLikeValue<ArrayLikeType>, index: ArrayLikeIndex<ArrayLikeType>, x: ArrayLikeType) => Return;

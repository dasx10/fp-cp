import type { ToIndexRight } from './index/index.D';

export type ArrayLikeValue <X extends ArrayLike<any>> = X extends ArrayLike<infer T> ? T : unknown;

export type ArrayLikeIterator <X, Return = any> = (value: X, index: ToIndexRight<number>, arrayLike: ArrayLike<X>) => Return;

export type ArrayLikeEachDef<Result, X = any, Return = any> = <IX extends X>(def: ArrayLikeIterator<IX, Return>, x: ArrayLike<X>) => Result;

export type ArrayLikeEachCurryDef<Result, Return = any> = {
  <X>(def: ArrayLikeIterator<X, Return>, x: ArrayLike<X>): Result;
  <X>(def: ArrayLikeIterator<X, Return>): (x: ArrayLike<X>) => Result;
}

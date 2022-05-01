import type { ToIndexRight } from './index/index.D';

export type ArrayLikeUnboxing <X extends ArrayLike<any>> = X extends ArrayLike<infer T> ? T : unknown;

export type ArrayLikeIterator <X, R = any> = (value: X, index: ToIndexRight<number>, arrayLike: ArrayLike<X>) => R;

export type ArrayLikeEachDef<R, X = any, RX = any> = <IX extends X>(def: ArrayLikeIterator<IX, RX>, x: ArrayLike<X>) => R;

export type ArrayLikeEachCurryDef<R, RX = any> = {
  <X>(def: ArrayLikeIterator<X, RX>, x: ArrayLike<X>): R,
  <X>(def: ArrayLikeIterator<X, RX>): (x: ArrayLike<X>) => R
}

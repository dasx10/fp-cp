import type { ToIndexRight } from './index/index.D';

export type ArrayLikeUnboxing <X extends ArrayLike<any>> = X extends ArrayLike<infer T> ? T : unknown;

export type ALI <X, R = any> = (value: X, index: ToIndexRight<number>, arrayLike: ArrayLike<X>) => R;

export type ArrayLikeEachDef<R, X = any, RX = any> = <IX extends X>(def: ALI<IX, RX>, x: ArrayLike<X>) => R;

export type ArrayLikeEachCurryDef<R, RX = any> = {
  <X>(def: ALI<X, RX>, x: ArrayLike<X>): R,
  <X>(def: ALI<X, RX>): (x: ArrayLike<X>) => R
}

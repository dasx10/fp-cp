export type ArrayLikeUnboxing <X extends ArrayLike<any>> = X extends ArrayLike<infer T> ? T : unknown;
export type ArrayLikeIDef <X, R = any> = (value: X, index: number, arrayLike: ArrayLike<X>) => R;

export type ArrayLikeEachDef<R, X = any, RX = any> = <IX extends X>(def: ArrayLikeIDef<IX, RX>, x: ArrayLike<X>) => R;
export type ArrayLikeEachCurryDef<R, RX = any> = {
  <X>(def: ArrayLikeIDef<X, RX>, x: ArrayLike<X>): R,
  <X>(def: ArrayLikeIDef<X, RX>): (x: ArrayLike<X>) => R
}

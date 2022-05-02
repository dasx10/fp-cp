import type { ArrayLikeValue } from "../../index.D";

export type ArrayLikeReduceCore = <INITIAL_VALUE, X extends ArrayLike<any>>(
  initialValue : INITIAL_VALUE,
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: number, x: X) => INITIAL_VALUE,
  x            : X
) => INITIAL_VALUE;

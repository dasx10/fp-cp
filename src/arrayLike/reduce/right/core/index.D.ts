import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";

export type ArrayLikeReduceRightCore <Type extends ArrayLike<unknown> = ArrayLike<unknown>> = <INITIAL_VALUE, X extends Type>(
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => INITIAL_VALUE,
  initialValue : INITIAL_VALUE,
  x            : X
) => INITIAL_VALUE;

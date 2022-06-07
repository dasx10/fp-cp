import type { ArrayLikeIndex, ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeReduceRightCore }       from "./index.D";

const arrayLikeReduceRightCore: ArrayLikeReduceRightCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => INITIAL_VALUE,
  initialValue : INITIAL_VALUE,
  x            : X
) => {
  const { length } = x;
  if (length > 0) {
    let currentValue = initialValue;
    let index = length as ArrayLikeIndex<X>;
    while (--index > -1) currentValue = def(currentValue, <ArrayLikeValue<X>>x[index], index, x);
    return currentValue;
  }

  return initialValue;
}

export default arrayLikeReduceRightCore;

import type { ArrayLikeValue } from "../../../index.D";
import type { ArrayLikeReduceRightCore } from "./index.D";

const arrayLikeReduceRightCore: ArrayLikeReduceRightCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  initialValue : INITIAL_VALUE,
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: number, x: X) => INITIAL_VALUE,
  x            : X
) => {
  const { length } = x;
  if (length > 0) {
    let currentValue = initialValue;
    let index = length;
    while (--index > -1) currentValue = def(currentValue, x[index], index, x);
    return currentValue;
  }

  return initialValue;
}

export default arrayLikeReduceRightCore;

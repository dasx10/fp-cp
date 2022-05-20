import type { ArrayLikeValue } from "../../index.D";
import type { ArrayLikeReduceCore } from "./index.D";

const arrayLikeReduceCore: ArrayLikeReduceCore = <INITIAL_VALUE, X extends ArrayLike<unknown>>(
  initialValue : INITIAL_VALUE,
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeValue<X>, index: number, x: X) => INITIAL_VALUE,
  x            : X
) => {
  const { length } = x;
  if (length > 0) {
    let currentValue = initialValue;
    let index = 0;
    while (index < length) {
      currentValue = def(currentValue, x[index], index, x);
      index++;
    }

    return currentValue;
  }

  return initialValue;
}

export default arrayLikeReduceCore;


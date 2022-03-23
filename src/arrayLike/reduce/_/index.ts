import { ArrayLikeUnboxing } from "../../index.D";

const _reduce = <INITIAL_VALUE, X extends ArrayLike<any>>(
  initialValue : INITIAL_VALUE,
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeUnboxing<X>, index: number, x: X) => INITIAL_VALUE,
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

export default _reduce;


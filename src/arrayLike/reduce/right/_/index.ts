import { ArrayLikeUnboxing } from "../../../index.D";

const _reduceRight = <INITIAL_VALUE, X extends ArrayLike<any>>(
  initialValue : INITIAL_VALUE,
  def          : (currentValue: INITIAL_VALUE, Value: ArrayLikeUnboxing<X>, index: number, x: X) => INITIAL_VALUE,
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

export default _reduceRight;

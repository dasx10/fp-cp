import type { ArrayLikeIndex, ArrayLikeValue } from './../../../index.D';
import type { ArrayLikeFindRightCore } from "./index.D";

const arrayLikeFindRightCore = (<X extends ArrayLike<unknown>>(
	def : (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, x: X) => unknown,
	x   : X
) => {
  const { length } = x;
  if (length > 0) {
    let index = length - 1 as ArrayLikeIndex<X>;
    let value = x[index]   as ArrayLikeValue<X>;
		if (def(value, index, x)) return value;
    while (--index > -1) {
			value = x[index] as ArrayLikeValue<X>;
      if (def(value, index, x)) return value;
		}
  }
}) as ArrayLikeFindRightCore

export default arrayLikeFindRightCore;

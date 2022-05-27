import type { ArrayLikeIndex, ArrayLikeValue }         from "../../../index.D";
import type { ArrayLikeForEachRightCore } from "./index.D";

const arrayLikeForEachRightCore: ArrayLikeForEachRightCore = <X extends ArrayLike<unknown>>(
	def: (value: ArrayLikeValue<X>, index: ArrayLikeIndex<X>, arrayLike: X) => unknown,
	x: X
): void => {
  let index = x.length;
  while (--index > -1) def(<ArrayLikeValue<X>>x[index], index, x);
};

export default arrayLikeForEachRightCore;

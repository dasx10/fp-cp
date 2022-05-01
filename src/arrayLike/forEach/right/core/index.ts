import type { ArrayLikeIterator }         from "../../../index.D";
import type { ArrayLikeForEachRightCore } from "./index.D";

const arrayLikeForEachRightCore: ArrayLikeForEachRightCore = <X>(def: ArrayLikeIterator<X>, x: ArrayLike<X>): void => {
  let index = x.length;
  while (--index > -1) def(x[index], index, x);
};

export default arrayLikeForEachRightCore;

import { ArrayLikeIDef } from "../../../index.D";

const _forEachRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>): void => {
  let index = x.length;
  while (--index > 0) def(x[index], index, x);
};

export default _forEachRight;

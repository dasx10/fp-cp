import { ALI } from "../../../index.D";

const _forEachRight = <X>(def: ALI<X>, x: ArrayLike<X>): void => {
  let index = x.length;
  while (--index > -1) def(x[index], index, x);
};

export default _forEachRight;

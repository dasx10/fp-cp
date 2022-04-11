import { ALI } from "../../index.D";

const _some = <X>(def: ALI<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = 0;
    while (index < length) if (def(x[index], index, x)) index++;
    else return false;
    return true;
  } 

  return false;
}

export default _some;

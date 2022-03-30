import { ArrayLikeIDef } from "../../../index.D";

const _someRight = <X>(def: ArrayLikeIDef<X>, x: ArrayLike<X>) => {
  const { length } = x;
  if (length > 0) {
    let index = length;
    while (--index > -1)
      if (def(x[index], index, x)) continue;
      else return false;
    return true;
  } 

  return false;
}

export default _someRight;

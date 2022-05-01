import type { StringIndex } from './../../index.D';
import type { Char } from "../../char/index.D";
import type { StrIterate } from "../../index.D";

const _map = <X extends string, R extends string>(def: StrIterate<X, R>, x: X) => {
  const { length } = x;
  if (length > 0) {
    let mapped: string = def(<Char<X>>x[0], 0 as StringIndex<X>, x);
    let index = 1 as StringIndex<X>;
    while (index < length) {
      mapped += def(<Char<X>>x[index], index, x);
      index++;
    }

    return mapped;
  }

  return '';
}

export default _map;

import { StrIndex } from './../../index.D';
import { Char } from "../../char/index.D";
import { StrIterate } from "../../index.D";

function _filter <X extends string>(def: StrIterate<X>, x: X) {
  const { length } = x;
  if (length > 0) {
    let filtered = '';
    let index = 0;
    while (index < length) {
      const char = x[index] as Char<X>;
      if (def(char, index as StrIndex<X>, x)) filtered += char;
      index++;
    }

    return filtered;
  }

  return '';
}

export default _filter;

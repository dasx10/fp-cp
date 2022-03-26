import type { AcceptString } from "../../../string/index.D";
import type { Join } from "./index.D";

const _join = <SEPARATOR extends AcceptString, X extends readonly any[]>(separator: SEPARATOR, array: X): Join<X, SEPARATOR> => {
  const { length } = array;
  if (length > 0) {
    let joined = '' + array[0];
    let index = 1;
    while (index < length) {
      joined += separator + array[index];
      index++;
    }

    return joined as Join<X, SEPARATOR>;
  }

  return '' as Join<X, SEPARATOR>;
}

export default _join;

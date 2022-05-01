import { Select } from './.D';
import { ArrayValue } from "../../index.D";

const _select = <Indexes extends readonly [number, ...number[]], X extends readonly any[]>(indexes: Indexes, x: X): Select<Indexes, X> => {
  const { length } = indexes;
  let index = 0;
  const selected = new Array<ArrayValue<X> | undefined>(length);
  while (index < length) {
    selected[index] = x[indexes[index]];
    index++;
  }

  return selected as Select<Indexes, X>;
}

export default _select;

import type { JoinCore } from "./index.D";

const _join = ((separator: string, array: any[]): string => {
  const { length } = array;
  if (length > 0) {
    let joined = '' + array[0];
    let index = 1;
    while (index < length) {
      joined += separator + array[index];
      index++;
    }

    return joined;
  }

  return '';
}) as JoinCore;

export default _join;

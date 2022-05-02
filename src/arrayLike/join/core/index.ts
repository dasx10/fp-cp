import type { ArrayLikeJoinCore } from "./index.D";

const arrayLikeJoinCore = ((separator: string, array: ArrayLike<any>): string => {
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
}) as ArrayLikeJoinCore;

export default arrayLikeJoinCore;

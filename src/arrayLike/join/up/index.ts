import type { ArrayLikeJoinUpCore } from "./index.D";

const arrayLikeJoinUp: ArrayLikeJoinUpCore = (<X extends ArrayLike<any>>(array: X) => {
  const { length } = array;
  if (length > 0) {
    let joined = '' + array[0];
    let index = 1;
    while (index < length) {
      joined += array[index];
      index++;
    }

    return joined;
  }

  return '';
}) as ArrayLikeJoinUpCore

export default arrayLikeJoinUp;

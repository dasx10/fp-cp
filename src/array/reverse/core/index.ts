import { ArrayReverse } from "../index.D";

const arrayReverseCore = <X extends readonly any[]>(array: X): ArrayReverse<X> => {
  const { length } = array;
  if (length) {
    const reversed = new Array(length);
    let index  = 0;
    let invert = length;
    while (index < length) {
      reversed[index] = array[--invert];
      index++;
    }
    return reversed as ArrayReverse<X>;
  }

  return [] as unknown as ArrayReverse<X>;
}

export default arrayReverseCore;

import { DropEnd } from "./index.D";

function dropEnd <T extends readonly any[]>(array: T): DropEnd<T> {
  const { length } = array;
  if (length > 0) {
    const stop = length - 1;
    const filtered = new Array(stop);
    let index = 0;
    while (index < stop) {
      filtered[index] = array[index];
      index++;
    }

    return filtered as DropEnd<T>;
  }

  return [] as unknown as DropEnd<T>;
}

export default dropEnd;

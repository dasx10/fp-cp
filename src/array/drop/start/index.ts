import { DropStart } from "./index.D";

function dropStart <T extends readonly any[]>(array: T): DropStart<T> {
  const { length } = array;
  if (length > 0) {
    const filtered = new Array(length - 1);
    let index = 1;
    while (index < length) {
      filtered[index] = array[index];
      index++;
    }

    return filtered as DropStart<T>;
  }

  return [] as unknown as DropStart<T>;
}

export default dropStart;

import { JoinUp } from "./index.D";

function joinUp <X extends readonly any[]>(array: X): JoinUp<X> {
  const { length } = array;
  if (length > 0) {
    let joined = '' + array[0];
    let index = 1;
    while (index < length) {
      joined += array[index];
      index++;
    }

    return joined as JoinUp<X>;
  }

  return '' as JoinUp<X>;
}

export default joinUp;

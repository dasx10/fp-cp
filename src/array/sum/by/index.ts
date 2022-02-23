import { ArrayIterateFunction } from "../../index.D";

function sumBy <ArrayElement>(executor: ArrayIterateFunction<ArrayElement, number>, array: readonly ArrayElement[]) {
  const { length } = array;
  if (length) {
    let sum = 0;
    let index = 0;
    while (index < length) {
      sum += executor(array[index], index, array);
      index++;
    }

    return sum;
  }

  return 0;
}

export default sumBy;

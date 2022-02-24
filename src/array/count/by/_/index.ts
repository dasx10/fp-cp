import { IterateDef } from "../../../index.D";

function _countBy <ArrayElement>(executor: IterateDef<ArrayElement>, array: ArrayElement[]) {
  const { length } = array;
  if (length > 0) {
    let index = 0;
    let count = 0;
    while (index < length) {
      if (executor(array[index], index, array)) count++;
      index++;
    }

    return count;
  }

  return 0;
}

export default _countBy;

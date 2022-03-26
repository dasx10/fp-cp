import { AddRightCore } from "./index.D";

const _addRight: AddRightCore = <Value, X extends readonly any[]>(value: Value, x: X): [...X, Value] => {
  const { length } = x;
  const newArray = new Array(length + 1);
  let index = 0;
  while (index < length) {
    newArray[index] = x[index];
    index++;
  }

  newArray[length] = value;
  return newArray as [...X, Value];
}

export default _addRight;

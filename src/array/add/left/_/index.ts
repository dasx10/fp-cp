import { Unboxing } from "../../../index.D";
import { AddLeftCore } from "./index.D";

const _addLeft: AddLeftCore = <Value, X extends readonly any[]>(value: Value, x: X): [Value, ...X] => {
  const { length } = x;
  const newArray = new Array<Value | Unboxing<X>>(length + 1);
  newArray[0] = value;
  let index = 1;
  while (index <= length) {
    newArray[index] = x[index];
    index++;
  }

  return newArray as [Value, ...X];
}

export default _addLeft;

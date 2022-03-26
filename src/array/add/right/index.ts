import _curry2 from "../../../function/curry/2/_/index";
import _addRight from "./_/index";

import { placeholder } from "../../../index";
import { AddRightCore } from "./_/index.D";

// @ts-ignore
const addRight: AddRightCore & {
  <Value>(value: Value): <X extends readonly any[]>(x: X) => [...X, Value]; 
  <X extends readonly any[]>(_: placeholder, x: X): <Value>(value: Value) => [...X, Value]; 
} = _curry2(_addRight);

export default Object.assign(addRight, {
  core: _addRight,
});

import _curry2   from "../../../function/curry/2/_/index";
import _addRight from "./_/index";

import type { placeholder }  from "../../../index";
import type { AddRightCore } from "./_/index.D";
import type { All } from "../../../is/index.D";

// @ts-ignore
const addRight: AddRightCore & {
  <Value extends All>(value: Value): <X extends readonly any[]>(x: X) => [...X, Value]; 
  <X extends readonly any[]>(_: placeholder, x: X): <Value extends All>(value: Value) => [...X, Value]; 
} = _curry2(_addRight);

export default Object.assign(addRight, {
  core: _addRight,
});

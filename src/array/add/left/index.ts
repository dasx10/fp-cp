import _curry2 from "../../../function/curry/2/_/index";
import _addLeft from "./_/index";

import type { placeholder } from "../../../index";
import type { AddLeftCore } from "./_/index.D";
import { All } from "../../../is/index.D";

// @ts-ignore
const addLeft: AddLeftCore & {
  <Value extends All>(value: Value): <X extends readonly any[]>(x: X) => [Value, ...X];
  <X extends readonly any[]>(_: placeholder, x: X): <Value extends All>(value: Value) => [Value, ...X];
} = _curry2(_addLeft);

export default Object.assign(addLeft, {
  core: _addLeft,
});

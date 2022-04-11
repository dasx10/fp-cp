import _curry2                  from "../../../function/curry/2/_/index";
import _concatRight             from "./_/index";
import type { placeholder }     from "../../../index";
import type { ConcatRightCore } from "./_/index.D";

// @ts-ignore
const concatRight: ConcatRightCore & {
  <Y extends readonly any[]>(y: Y): <X extends readonly any[]>(x: X) => [...Y, ...X];
  <X extends readonly any[]>(_: placeholder, x: X): <Y extends readonly any[]>(y: Y) => [...Y, ...X]; 
} = _curry2(_concatRight);

export default Object.assign(concatRight, {
  core: _concatRight,
});

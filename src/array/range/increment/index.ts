import _curry2 from "../../../function/curry/2/_/index";
import _rangeIncrement from "./_/index";
import type { placeholder } from "../../../index";

const rangeIncrement: {
  <X extends number, Y extends number>(x: X, y: Y): number[];
  <X extends number> (x: X): <Y extends number> (y: Y) => number[];
  <Y extends number> (_: placeholder, y: Y): <X extends number> (x: X) => number[];
}  = _curry2(_rangeIncrement)

export default rangeIncrement;

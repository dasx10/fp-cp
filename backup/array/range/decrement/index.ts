import _curry2 from "../../../function/curry/2/_/index";
import _rangeDecrement from "./_/index";
import type { placeholder } from "../../../index";

const rangeDecrement: {
  <X extends number, Y extends number>(x: X, y: Y): number[];
  <X extends number> (x: X): <Y extends number> (y: Y) => number[];
  <Y extends number> (_: placeholder, y: Y): <X extends number> (x: X) => number[];
} = _curry2(_rangeDecrement);

export default rangeDecrement;


const a = rangeDecrement(3, 2);

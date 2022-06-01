// dependencies
import _curry2 from "../../../function/curry/2/_/index";
import _average from "./_/index";

const average: {
  <Y extends number, X extends number>(y: Y, x: X): number;
  <Y extends number>(y: Y): <X extends number>(x: X) => number;
} = _curry2(_average);

export default average;

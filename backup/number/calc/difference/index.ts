// dependencies
import _curry2 from "../../../function/curry/2/_/index";
import _differences from "./_/index";

const difference: {
  <Y extends number, X extends number>(y: Y, x: X): number;
  <Y extends number>(y: Y): <X extends number>(x: X) => number;
} = _curry2(_differences);

export default difference;

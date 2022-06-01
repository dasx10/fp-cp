import _curry2 from "../../../function/curry/2/_/index";
import _sum from "./_/index";

const sum:{
  <Y extends number>(y: Y): <X extends number>(x: X) => number;
  <Y extends number, X extends number>(y: Y, x: X): number;
} = _curry2(_sum);

export default sum;

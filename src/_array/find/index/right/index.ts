import _curry2 from "../../../../function/curry/2/_/index";
import _findIndexRight from "./_/index";
import type { IterateDef } from "../../../index.D";

const findIndexRight: {
  <X>(def: IterateDef<X>, array: X[]): number;
  <X>(def: IterateDef<X>): (array: X[]) => number;
} = _curry2(_findIndexRight)

export default findIndexRight;

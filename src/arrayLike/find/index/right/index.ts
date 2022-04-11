import _curry2         from "../../../../function/curry/2/_/index";
import _findIndexRight from "./_/index";
import type { ALI } from "../../../index.D";

const findIndexRight: {
  <X>(def: ALI<X>, x: ArrayLike<X>): number;
  <X>(def: ALI<X>):(x: ArrayLike<X>) => number;
} = _curry2(_findIndexRight);

export default findIndexRight;

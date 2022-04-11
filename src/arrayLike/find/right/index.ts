import _curry2    from "../../../function/curry/2/_/index";
import _findRight from "./_/index";
import type { ALI } from "../../index.D";

const findRight: {
  <X>(def: ALI<X>, x: ArrayLike<X>): X | undefined,
  <X>(def: ALI<X>): (x: ArrayLike<X>) => X | undefined
} = _curry2(_findRight);

export default findRight;

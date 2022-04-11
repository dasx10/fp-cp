import _curry2  from "../../function/curry/2/_/index";
import _forEach from "./_/index";
import type { ALI } from "../index.D";

// dependencies
import forEachRight from "./right/index";

const forEach: {
  <X>(def: ALI<X>, x: ArrayLike<X>): void;
  <X>(def: ALI<X>):(x: ArrayLike<X>) => void;
} = _curry2(_forEach);

export default Object.assign(forEach, {
  right: forEachRight
});

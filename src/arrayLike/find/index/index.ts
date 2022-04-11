import _curry2    from "../../../function/curry/2/_/index";
import _findIndex from "./_/index";

import type { ALI } from "../../index.D";

// dependencies
import findIndexRight from "./right/index";

const findIndex: {
  <X>(def: ALI<X>, x: ArrayLike<X>): number;
  <X>(def: ALI<X>):(x: ArrayLike<X>) => number;
} = _curry2(_findIndex);

export default Object.assign(findIndex, {
  core : _findIndex,
  right: findIndexRight
});

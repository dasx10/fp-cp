import _curry2 from "../../function/curry/2/_/index";
import _sort from "./_/index";
import type { Def2 } from "../../function/index.D";

const sort: {
  <X>(executor: Def2<X, X>, array: X[]): X[];
  <X>(executor: Def2<X, X>): (array: X[]) => X[];
} = _curry2(_sort);

export default sort;

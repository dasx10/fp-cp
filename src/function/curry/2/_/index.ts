import _, { placeholder } from "../../../../index";
import type { Def2 } from "../../../index.D";

function _curry2 <Y, X, R> (def: <G>(y: Y, x: X) => R): {
  (y: Y, x: X): R;
  (y: Y): (x: X) => R;
  (_: placeholder, x: X): (y: Y) => R;
}

function _curry2 <
  Y, X, R
>(def: Def2<Y, X, R>) {
  return function (y: Y | X | placeholder, x?: X | Y) {
    return arguments.length === 1 
      ? (x: X) => def(<Y>y, x)
      : _ === arguments[0]
        ? (x: Y) => def(x, <X>y)
        : def(<Y>y, x as X);
  };
}

export default _curry2;

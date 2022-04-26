import _map from "../../../../array/map/_/index";
import _, { placeholder } from "../../../../index";
import { All } from "../../../../is/index.D";
import { Def2 } from "../../../index.D";

// function _curry2 <
//   Def  extends Def2<Args[0], Args[1], R>,
//   Args extends [Parameters<Def>[0], Parameters<Def>[1]],
//   R
// > (def: Def): {
//   (...args: Args): R;
//   (y: Args[0]): (x: Args[1]) => ReturnType<Def>;
//   (_: placeholder, x: Args[1]): (y: Args[0]) => ReturnType<Def>
// }

// function _curry2 <Def extends Def2> (def: Def): {
//   <Y extends Parameters<Def>[0]>(y: Y): <X extends Parameters<Def>[1]>(x: X) => ReturnType<Def>;
//   <Y extends Parameters<Def>[0], X extends Parameters<Def>[1]>(y: Y, x: X): ReturnType<Def>;
//   <X extends Parameters<Def>[1]>(_: placeholder, x: X): <Y extends Parameters<Def>[0]>(y: Y) => ReturnType<Def>;
// }

function _curry2 <Y, X, R> (def: <YY>(y: Y, x: X) => R): {
  (y: Y, x: X): R;
  (y: Y): (x: X) => R;
  (_: placeholder, x: X): (y: Y) => R;
}


// function _curry2 <R> (def: <Y, X>(y: Y, x: X) => R): {
  // <Y, X>(y: Y, x: X): R;
  // (y: Y): (x: X) => R;
  // (_: placeholder, x: X): (y: Y) => R;
// }

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
const a = _curry2(<Y extends string, X extends string>(y: Y, x: X): `${X}${Y}` => x + y as `${X}${Y}`);
const b = a('d', 'c')

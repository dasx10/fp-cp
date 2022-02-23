import { Def2 } from "../../../index.D";

function _curry2 <
  Y   extends Parameters<Def>[0],
  X   extends Parameters<Def>[1],
  R   extends ReturnType<Def>,
  Def extends Def2 = Def2<Y, X, R>,
>(def: Def & Def2<Y, X, R>): {
  (y: Y, x: X): R;
  (y: Y): (x: X) => R;
};

function _curry2 <Y, X, R>(def: Def2<Y, X, R>) {
  function useCurry2 (y: Y): (x: X) => R;
  function useCurry2 (y: Y, x: X): R;
  function useCurry2 (y: Y, x?:X) {
    return arguments.length === 1 ? (x: X) => def(y, x) : def(y, <X>x);
  }
  return useCurry2;
}

export default _curry2;

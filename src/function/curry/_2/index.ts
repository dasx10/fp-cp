import { FirstParameter, SecondParameter } from "../../index.D";

type F2 <Y = any, X = any, R = any> = (y: Y, x: X) => R;

function _curry2 <
  Y extends FirstParameter<Executor>,
  X extends SecondParameter<Executor>,
  R extends ReturnType<Executor>,
  Executor extends F2,
>(executor: Executor | F2<Y, X, R>) {
  function useCurry2 (y: Y): (x: X) => R;
  function useCurry2 (y: Y, x: X): R;

  function useCurry2 (y: Y, x?: X): R | ((x: X) => R) {
    return arguments.length === 1 
      ? (x: X) => executor(y, x)
      : executor(y, x as X);
  }
  return useCurry2;
}

export default _curry2;

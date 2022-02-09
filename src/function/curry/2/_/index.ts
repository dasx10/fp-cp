import { FirstParameter, SecondParameter } from "../../../index.D";

type F2 <Y = any, X = any, R = any> = (y: Y, x: X) => R;

function _curry2 <
  Executor extends F2,
>(executor: Executor): {
  <
    Y extends FirstParameter<Executor>,
    X extends SecondParameter<Executor>,
  >(y: Y, x: X): Executor extends (y: Y, x: X) => infer R ? R : void;
  <
    Y extends FirstParameter<Executor>
  >(y: Y): <
    X extends SecondParameter<Executor>
  >(x: X) => Executor extends (y: Y, x: X) => infer R ? R : void;
} {
  return function   <
    Y extends FirstParameter<Executor>,
    X extends SecondParameter<Executor>,
  >(y: Y, x?: X) {
    return arguments.length === 1 
      ? <X extends SecondParameter<Executor>>(x: X) => executor(y, x)
      : executor(y, x as X);
  };
}

export default _curry2;

import { FirstParameter, SecondParameter } from "../../index.D";

type F2 <A = any, B = any, R = any> = (a: A, b: B) => R;

function _curry2 <Executor extends F2>(executor: Executor): <
  A extends FirstParameter<Executor>,
  B extends (SecondParameter<Executor> | undefined)
> (a: A, b?: B) => SecondParameter<Executor> extends B
? <B extends SecondParameter<Executor>>(b: B) => ReturnType<Executor>
: ReturnType<Executor>;

function _curry2 <Executor extends F2>(executor: Executor) {
  return function (a: FirstParameter<Executor>, b?: SecondParameter<Executor>) {
    return arguments.length === 1 ? (b: SecondParameter<Executor>) => executor(a, b) : executor(a, b as SecondParameter<Executor>);
  }
}

export default _curry2;

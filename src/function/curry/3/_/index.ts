import { Def3 } from "../../../index.D";

function _curry3 <Executor extends Def3>(executor: Executor): {
  <
    Z extends Parameters<Executor>[0],
    Y extends Parameters<Executor>[1],
    X extends Parameters<Executor>[2]
  >(z: Z, y: Y, x: X): ReturnType<Executor>;
  <
    Z extends Parameters<Executor>[0],
    Y extends Parameters<Executor>[1]
  >(z: Z, y: Y): <X extends Parameters<Executor>[2]>(x: X) => ReturnType<Executor>;

  <Z extends Parameters<Executor>[0]>(z: Z): {
    <
      Y extends Parameters<Executor>[1],
      X extends Parameters<Executor>[2]
    >(y: Y, x: X): ReturnType<Executor>;
    <Y extends Parameters<Executor>[1]>(y: Y): <X extends Parameters<Executor>[2]>(x: X) => ReturnType<Executor>;
  }
}

function _curry3 <Z, Y, X, R>(executor: Def3<Z, Y, X, R>) {
  return function (z: Z, y?: Y, x?: X) {
    switch (arguments.length) {
      case 3: return executor(z, <Y>y, <X>x);
      case 2: return (x: X) => executor(z, <Y>y, x);
      case 1: return function (y: Y, x?: X) {
        if (arguments.length === 1) return (x: X) => executor(z, y, x);
        return executor(z, y, <X>x);
      }
    }
  }
}

export default _curry3;

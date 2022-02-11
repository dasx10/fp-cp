import _, { placeholder } from "../../../../index";
import { Def2 } from "../../../index.D";


function _curry2 <Def extends Def2> (executor: Def): {
  <X extends Parameters<Def>[1]>(_: placeholder, x: X): <Y extends Parameters<Def>[0]>(y: Y) => ReturnType<Def>;
  <Y extends Parameters<Def>[0], X extends Parameters<Def>[1]>(x: X, y: Y): ReturnType<Def>
  <Y extends Parameters<Def>[0]>(y: Y): <X extends Parameters<Def>[1]>(x: X) => ReturnType<Def>
} 

function _curry2 <
  Y, X, R
>(executor: Def2<Y, X, R>) {
  return function (y: Y | X | placeholder, x?: X) {
    return arguments.length === 1 
      ? (x: X) => executor(<Y>y, x)
      : _ === arguments[0]
        ? (x: Y) => executor(x, <X>y)
        : executor(<Y>y, x as X);
  };
}

export default _curry2;

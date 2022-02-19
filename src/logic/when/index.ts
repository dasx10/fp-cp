import { DefAny } from "../../function/index.D";
import add from "../../number/calc/add/index";
import isNumber from "../../number/is/number/index";

function when <
  X, R extends boolean,
  Y extends X, RY, 
  Z extends Exclude<X, Y>, RZ
>(
  executor: (x: X | Y | Z) => R,
  isTrue  : (y: Y) => RY,
  isFalse : (z: Z) => RZ
): (x: X | Z | Y) => R extends true ? RY : R extends false ? RZ : (RY | RZ) {
  return function (x: X | Y | Z) {
    return (executor(x)
      ? isTrue(<Y>x) 
      : isFalse(<Z>x)) as (R extends true ? RY : R extends false ? RZ : (RY | RZ));
  }
}

export default when;


const a = 10 as string | number;

const aa = isNumber(3)
const result = when(
  isNumber, 
  (a: number) => a, 
  (a: boolean) => ''
)

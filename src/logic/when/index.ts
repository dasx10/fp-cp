import { Def1 } from "../../function/index.D"
import { All } from "../../is/index.D";
import isNumber from "../../number/is/_/index";

function when <
  Right,
  Left,
  RX, 
  LX extends Exclude<All, RX>,
  X,
  R extends boolean
> (
  executor : ((x: unknown) => x is RX) & (Def1<X, R>),
  right    : Def1<RX, Right>,
  left     : Def1<LX, Left>,
): {
  (x: X): X extends RX   ? Right : RX extends X    ? Right : (Right | Left);
  (x: X): R extends true ? Right : R extends false ? Left  : (Right | Left);
  (x: unknown): (Right | Left);
}

function when <
  Right,
  Left,
  RX extends X, 
  LX extends X,
  X,
  R extends boolean,
> (
  executor : Def1<X, R>,
  right    : Def1<RX, Right>,
  left     : Def1<LX, Left>,
): {
  (x: X): R extends true ? Right : R extends false ? Left : (Right | Left);
  (x: unknown): (Right | Left);
}

function when <
  Right,
  Left,
  RX, 
  LX extends X | Exclude<All, RX>,
  X,
  R extends boolean,
> (
  executor: Def1<X, R> | ((x: unknown) => x is RX),
  right   : Def1<RX, Right>,
  left    : Def1<LX, Left>,
) {
  return (x: X) => executor(x)
    ? right(<RX>x) 
    : left (<LX>x);
}


export default when;

import { All } from "../../../is/index.D";
import { DefAny } from "../../index.D";

function isFunction <X extends All>(x: X): x is Extract<X, DefAny>;
function isFunction (x: DefAny): true;
function isFunction (x: unknown): x is DefAny<unknown[], unknown> {
  return typeof x === "function"
}

export default isFunction;

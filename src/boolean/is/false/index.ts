import { All } from "../../../is/index.D";
import { IS_FALSE } from "./index.D";

function isFalse (x: false): true;
function isFalse <X extends All>(x: X): IS_FALSE<X>;
function isFalse (x: unknown): x is false;
function isFalse (x: unknown): x is false {
  return x === false;
}

export default isFalse;

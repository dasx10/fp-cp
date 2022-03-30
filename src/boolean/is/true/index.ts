import type { All } from "../../../is/index.D";
import type { IS_TRUE } from "./index.D";

function isTrue (x: true): true;
function isTrue <X extends All>(x: X): IS_TRUE<X>;
function isTrue (x: unknown): x is true;
function isTrue (x: unknown): x is true {
  return x === true;
}

export default isTrue;

import { All } from "../../../is/index.D";
import { IS_NUMBER } from "./index.D";

function isNumber <X extends number>(x: X): true;
function isNumber <X extends Exclude<All, number>>(x: X): false;
function isNumber (x: unknown): x is number;
function isNumber (x: unknown) {
  return typeof x === 'number';
}

export default isNumber;

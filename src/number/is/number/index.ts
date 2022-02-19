import { IS_NUMBER } from "./index.D";

function isNumber <X>(x: X): IS_NUMBER<X>;
function isNumber (x: unknown): x is number;
function isNumber (x: any) {
  return typeof x === 'number';
}

export default isNumber;

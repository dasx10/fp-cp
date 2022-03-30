import toggle from "./toggle/index";
import is from './is/index';

import type { All } from "../is/index.D";
import type { TOGGLE } from "./toggle/index.D";

function boolean <X extends boolean>(x: X): X;
function boolean <X extends All>(x: X): TOGGLE<TOGGLE<X>>;
function boolean (x: unknown): boolean;
function boolean (x: unknown): boolean {
  return Boolean(x);
}

export default Object.assign(boolean, {
  toggle,
  is
});

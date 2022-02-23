import { All } from "../index.D";

function isNotNothing <X extends All>(x: X): x is Exclude<X, null | undefined>
function isNotNothing (x: unknown): x is Exclude<All, null | undefined> {
  return x !== undefined && x !== null;
}

export default isNotNothing;

import { All } from "../../../is/index.D";

const arrayIsArray = Array.isArray as {
  (x: any[])  : true;
  (x: Exclude<All, object>): false;
  <X extends All>(x: X): x is Extract<X, object>
  (x: unknown): x is unknown[];
}

export default arrayIsArray;

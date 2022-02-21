import { Chars } from "../../../string/chars/index.D";
import { Tail } from "./index.D";

function tail <X extends readonly any[]> (x: X): Tail<X>; 
function tail <X extends string> (x: X): Tail<Chars<X>>;
function tail (x: string | any[]) {
  return x[x.length - 1];
}

export default tail;

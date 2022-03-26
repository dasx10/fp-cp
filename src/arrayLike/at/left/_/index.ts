import type { ToIndexLeft } from "../../../index.D";
import type { AtLeft } from "./index.D";

function _atLeft <Key extends number, X extends ArrayLike<any>>(index: ToIndexLeft<Key>, x: X): AtLeft<Key, X> {
  return x[index];
}

export default _atLeft;

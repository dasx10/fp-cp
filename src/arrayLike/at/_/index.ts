import { ToIndexLeft, ToIndexRight } from "../../index/index.D";
import _atLeft  from "../left/_/index";
import _atRight from "../right/_/index";

function _at <Index extends number, X extends ArrayLike<any>>(index: Index, x: X) {
  return index < 0 
		? _atRight(<ToIndexRight<Index>>index, x)
		: _atLeft(<ToIndexLeft<Index>>index, x);
}

export default _at;

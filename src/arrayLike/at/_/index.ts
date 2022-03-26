import { ExcludeNegative, ExcludePositive } from "../../../number/index.D";
import _atLeft  from "../left/_/index";
import _atRight from "../right/_/index";

function _at <Index extends number, X extends ArrayLike<any>>(index: Index, x: X) {
  return index < 0 ? _atRight(<ExcludePositive<Index>>index, x) : _atLeft(<ExcludeNegative<Index>>index, x);
}

export default _at;

import _skipLeft     from "../left/_/index";
import _skipRight    from "../right/_/index";
import { ArraySkip } from "./index.D";

function _skip <Index extends number, X extends any[]>(index: Index, array: X): ArraySkip<Index, X> {
  return (index 
    ? index > 0 
      ? _skipRight(index, array) 
      : _skipLeft(index, array) 
    : []) as ArraySkip<Index, X>;
}

export default _skip;

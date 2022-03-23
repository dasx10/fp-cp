import _atRight from "./_/index";
import atLeft  from "../left/index";
import type { AtLeftDef } from "../left/index";

export type AtRightDef<Index extends number> = {
  <X>(arrayLike: ArrayLike<X>) : X | undefined;
  left                         : AtLeftDef<Index>;
  index                        : Index;
}

function atRight <Index extends number, X>(index: Index, arrayLike: ArrayLike<X>): X | undefined;
function atRight <Index extends number> (index: Index): AtRightDef<Index>;
function atRight <Index extends number, X>(index: Index, array?: ArrayLike<X>) {
  if (arguments.length > 1) return _atRight(index, <ArrayLike<X>>array);

  return Object.assign(<X>(array: ArrayLike<X>) => _atRight(index, array), {
    left : atLeft(index),
    index,
  });
}

export default atRight;

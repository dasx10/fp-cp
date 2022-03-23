import _atLeft from "./_/index";
import atRight from "../right/index";
import type { AtRightDef } from '../right/index';


export type AtLeftDef<Index extends number> = {
  <X>(arrayLike: ArrayLike<X>) : X | undefined;
  right                        : AtRightDef<Index>;
  index                        : Index;
  length                       : 1;
}

function atLeft <Index extends number, X>(index: Index, arrayLike: ArrayLike<X>): X | undefined;
function atLeft <Index extends number> (index: Index): AtLeftDef<Index>;
function atLeft <Index extends number, X>(index: Index, arrayLike?: ArrayLike<X>) {
  if (arguments.length > 1) return _atLeft(index, <ArrayLike<X>>arrayLike);

  return Object.assign(<X>(arrayLike: ArrayLike<X>) => _atLeft(index, arrayLike), {
    right: atRight(index),
    index,
  });
};

export default atLeft;

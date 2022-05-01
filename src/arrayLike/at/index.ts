// core
import _                 from "../../index";
import _arrayLikeAt      from "./core/index";
import _arrayLikeAtLeft  from "./left/_/index";
import _arrayLikeAtRight from "./right/_/index";

// dependencies
import arrayLikeAtRight  from "./right/index";
import arrayLikeAtLeft   from "./left/index";
import arrayLikeAtRandom from "./random/index";
import arrayLikeHead     from "./head/index";
import arrayLikeTail     from "./tail/index";

// interfaces
import type { placeholder } from '../../index';
import type { At }          from "./index.D";
import type { ToIndex } from "../index/index.D";

function atDef <Key extends number, X extends ArrayLike<any>>(index: ToIndex<Key>, x: X): At<Key, X>;
function atDef <Key extends number>(index: ToIndex<Key>): <X extends ArrayLike<any>>(x: X) => At<Key, X>;
function atDef <X extends ArrayLike<any>> (_: placeholder, x: X): <Key extends number>(index: ToIndex<Key>) => At<Key, X>;

function atDef <Key extends number, X extends ArrayLike<any>>(index: ToIndex<Key> | placeholder, x?: X | ToIndex<Key>) {
  if (arguments.length === 1) {
    const _at = index < 0 ? _arrayLikeAtRight : _arrayLikeAtLeft;
    return (x: ArrayLike<any>) => _at(<ToIndex<number>>index, x);
  }

  else if (index === _) return <Key extends number>(index: ToIndex<Key>) => _arrayLikeAt(index, <X>x);
  else return _arrayLikeAt(<ToIndex<Key>>index, <X>x);
}

const arrayLike = Object.assign(atDef, {
  core   : _arrayLikeAt,
  first  : arrayLikeHead,
  last   : arrayLikeTail,
  right  : arrayLikeAtRight,
  left   : arrayLikeAtLeft,
  random : arrayLikeAtRandom,
});

export default arrayLike;

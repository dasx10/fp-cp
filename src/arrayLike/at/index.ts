// core
import _        from "../../index";
import _at      from "./_/index";
import _atLeft  from "./left/_/index";
import _atRight from "./right/_/index";

// dependencies
import atRight  from "./right/index";
import atLeft   from "./left/index";
import atRandom from "./random/index";
import head     from "./head/index";
import tail     from "./tail/index";

// interfaces
import type { placeholder } from '../../index';
import type { At }          from "./index.D";
import type { ToIndex } from "../index/index.D";

function at <Key extends number, X extends ArrayLike<any>>(index: ToIndex<Key>, x: X): At<Key, X>;
function at <Key extends number>(index: ToIndex<Key>): <X extends ArrayLike<any>>(x: X) => At<Key, X>;
function at <X extends ArrayLike<any>> (_: placeholder, x: X): <Key extends number>(index: ToIndex<Key>) => At<Key, X>;

function at <Key extends number, X extends ArrayLike<any>>(index: ToIndex<Key> | placeholder, x?: X | ToIndex<Key>) {
  if (arguments.length === 1) {
    const _at = index < 0 ? _atRight : _atLeft;
    return (x: ArrayLike<any>) => _at(<ToIndex<number>>index, x);
  }

  else if (index === _) return <Key extends number>(index: ToIndex<Key>) => _at(index, <X>x);
  else return _at(<ToIndex<Key>>index, <X>x);
}

export default Object.assign(at, {
  core   : _at,
  first  : head,
  last   : tail,
  right  : atRight,
  left   : atLeft,
  random : atRandom,
});

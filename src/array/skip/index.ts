// core
import _          from "../../index";
import _skipLeft  from "./left/_/index";
import _skipRight from "./right/_/index";
import _skip      from "./_/index";

// dependencies
import skipLeft   from "./left/index";
import skipRight  from "./right/index";

// interfaces
import type { ArraySkip }   from "_/index.D";
import type { ArrayIndex }       from '../index.D';
import type { placeholder } from "../../index";

type InputKey <Key extends number, X extends readonly any[]> = number extends Key ? Key : (ArrayIndex<X> & Key);

function skip <Key extends number, X extends readonly any[]>(index: InputKey<Key, X>, array: X): ArraySkip<Key, X>;
function skip <Key extends number>(index: Key): <X extends readonly any[]>(array: X) => ArraySkip<Key, X>;
function skip <X extends readonly any[]> (_: placeholder, x: X): <Key extends number>(index: number extends Key ? Key : (ArrayIndex<X> & Key)) => ArraySkip<Key, X>;

function skip <Key extends number, X extends readonly any[]>(index: Key | placeholder, array?: X | Key) {
  if (arguments.length === 1)  {
    const executor = index < 0 ? _skipRight : _skipLeft;
    return <X extends readonly any[]>(array: X) => executor(<Key>index, <X>array);
  }
  else if (index === _) return <Key extends ArrayIndex<X>>(index: Key) => index < 0 ? _skipRight(<Key>index, <X>array) : _skipLeft(<Key>index, <X>array);
  return index < 0 ? _skipRight(<Key>index, <X>array) : _skipLeft(<Key>index, <X>array);
}

const arraySkip = Object.assign(skip, {
  core  : _skip,
  right : skipRight,
  left  : skipLeft,
});

export default arraySkip;

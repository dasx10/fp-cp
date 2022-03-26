import _curry2 from "../../function/curry/2/_/index";
import _split  from "./_/index";
import type { placeholder } from "../../index";
import type { Split } from "./_/index.D";
import _ from "../../index";

// @ts-ignore
const split: {
  (separator: RegExp) : (x: string) => string[];
  <SEPARATOR extends string>(separator: SEPARATOR): <X extends string>(x: X) => Split<SEPARATOR, X>;
  (separator: RegExp, x: string): string[];
  <SEPARATOR extends string, X extends string>(separator: SEPARATOR, x: X): Split<SEPARATOR, X>;
  <X extends string>(_: placeholder, x: X): <SEPARATOR extends string | RegExp>(separator: SEPARATOR) => Split<SEPARATOR, X>;
} = _curry2(_split);

export default split;

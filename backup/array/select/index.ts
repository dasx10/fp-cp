import _curry2 from "../../function/curry/2/_/index";
import _select from "./_/index";

// interfaces
import type { placeholder } from "../../index";
import type { ArrayIndex } from "../index.D";
import type { Select } from "./_/.D";

const select = _curry2(_select) as {
  <Indexes extends readonly ArrayIndex<X>[], X extends readonly any[]>(indexes: Indexes, x: X): Select<Indexes, X>;
  <Indexes extends readonly number[]>(indexes: Indexes): <X extends readonly any[]> (x: X) => Select<Indexes, X>;
  <X extends readonly any[]> (_: placeholder, x: X): <Indexes extends readonly ArrayIndex<X>[]>(indexes: Indexes) => Select<Indexes, X>;
};

export default select;

const a = select([1] as const)

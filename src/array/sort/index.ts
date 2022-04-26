import _curry2 from "../../function/curry/2/_/index";
import _sort from "./_/index";
import type { placeholder } from "../../index";
import type { Unboxing } from "../index.D";
import type { Sort, SortCore } from "./_/index.D";

// @ts-ignore
const sort: SortCore & {
	<Value>(def: (a: Value, b: Value) => any): <X extends readonly Value[]>(x: X) => Sort<X>;
	<X extends readonly any[]>(_: placeholder, x : X): (def: (a: Unboxing<X>, b: Unboxing<X>) => any, ) => Sort<X>;
} = _curry2(_sort);

export default Object.assign(sort, {
	core: _sort,
});

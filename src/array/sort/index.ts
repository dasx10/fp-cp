import _curry2 from "../../function/curry/2/_/index";
import arraySortCore from "./core/index";
import type { placeholder } from "../../index";
import type { ArrayValue } from "../index.D";
import type { Sort, SortCore } from "./core/index.D";

// @ts-ignore
const sort: SortCore & {
	<Value>(def: (a: Value, b: Value) => any): <X extends readonly Value[]>(x: X) => Sort<X>;
	<X extends readonly any[]>(_: placeholder, x : X): (def: (a: ArrayValue<X>, b: ArrayValue<X>) => any, ) => Sort<X>;
} = _curry2(arraySortCore);

export default Object.assign(sort, {
	core: arraySortCore,
});

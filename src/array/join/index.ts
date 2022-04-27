import _curry2 from "../../function/curry/2/_/index";
import _join   from "./_/index";
import joinUp from "./up/index";
import type { placeholder } from "../../index";
import type { Join, JoinCore } from "./_/index.D";

const join = _curry2(_join) as JoinCore & {
	<SEPARATOR extends string>(separator: SEPARATOR): <X extends readonly string[]>(x: X) => Join<X, SEPARATOR>;
	<X extends readonly string[]>(_: placeholder, x: X): <SEPARATOR extends string>(separator: SEPARATOR) => Join<X, SEPARATOR>;
};

export default Object.assign(join, {
	up: joinUp
});

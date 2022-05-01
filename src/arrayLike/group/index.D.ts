import type { placeholder }        from "../../index";
import type { ArrayLikeIterator }  from "../index.D";
import type { ArrayLikeGroupCore } from "./core/index.D";

export type ArrayLikeGroupDef = ArrayLikeGroupCore & {
	<X, Key extends PropertyKey>(def: ArrayLikeIterator<X, Key>): (x: ArrayLike<X>) => Record<Key, X>;
	<X>(_: placeholder, x: ArrayLike<X>): <Key extends PropertyKey>(def: ArrayLikeIterator<X, Key>) => Record<Key, X>;
}

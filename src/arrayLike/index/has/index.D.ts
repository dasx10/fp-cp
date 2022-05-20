import type { placeholder } from "../../../index";
import type { ToIndexDirect } from "../index.D";
import type { ArrayLikeIndexHasCore } from "./core/index.D";

export type ArrayLikeIndexHasDef = ArrayLikeIndexHasCore & {
	<Index extends number>(index: ToIndexDirect<Index>): (x: ArrayLike<unknown>) => boolean;
	(_: placeholder, x: ArrayLike<unknown>): <Index extends number>(index: ToIndexDirect<Index>) => boolean
};

import type { placeholder } from "../../../index";
import type { ToIndexDirect } from "../index.D";
import type { ArrayLikeIndexHasCore } from "./core/index.D";

export type ArrayLikeIndexHasDef = ArrayLikeIndexHasCore & {
	<Index extends number>(index: ToIndexDirect<Index>): (x: ArrayLike<any>) => boolean;
	(_: placeholder, x: ArrayLike<any>): <Index extends number>(index: ToIndexDirect<Index>) => boolean
};
